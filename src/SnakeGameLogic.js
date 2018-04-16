import {ROWS, COLS} from './config';

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [
    {x: 2, y: 0},
    {x: 1, y: 0},
    {x: 0, y: 0},
  ];

  // 먹이의 좌표
  this.fruit = {x: 3, y: 5};
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  console.log('up');
}

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  console.log('down');
}

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log('left');
}

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log('right');
}

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);
  return true;
}

export default SnakeGameLogic;
