type Point = {
  x: number
  y: number
}

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
]

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // Base case 1, are you off the map
  if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
    return false
  }

  // Base case 2, are you on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false
  }

  // Base case 3, are you and the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end)
    return true
  }

  //Base case 4, are you at a spot you seen before
  if (seen[curr.y][curr.x]) {
    return false
  }

  // Now to start the recursion steps. There are 3 steps of recursion Pre, Recurse, Post.
  // You can do a action before the recursion then the recursion happens and finally you can do a action after the recursion which will essentially play it backwards.

  //Pre
  seen[curr.y][curr.x] = true
  path.push(curr)

  //Recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i]
    if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path)) {
      return true
    }
  }

  //Post
  path.pop()

  return false
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const seen: boolean[][] = []
  const path: Point[] = []

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[i].length).fill(false))
  }

  walk(maze, wall, start, end, seen, path)

  return path
}
