import React from 'react';
import {render} from 'react-dom';
import throttle from 'lodash.throttle';
import {
  ROWS,
  COLS,
  INITIAL_DELAY,
  DELAY_EXPONENT,
  GAME_ROOT
} from './config';
import SnakeGameLogic from './SnakeGameLogic';

import './index.css';

export default class SnakeGame {
  delay = INITIAL_DELAY;
  gameState = null;
  constructor() {
    this.handleKeydown = throttle(this.handleKeydown.bind(this), 100);
    this.nextFrame = this.nextFrame.bind(this);
  }

  handleKeydown(e) {
    // console.log(`keydown: ${e.key}`);
    switch (e.key) {
      case 'ArrowUp':
        this.logic.up && this.logic.up();
        this.nextFrame();
        break;
      case 'ArrowDown':
        this.logic.up && this.logic.down();
        this.nextFrame();
        break;
      case 'ArrowLeft':
        this.logic.up && this.logic.left();
        this.nextFrame();
        break;
      case 'ArrowRight':
        this.logic.up && this.logic.right();
        this.nextFrame();
        break;
    }
  }

  nextFrame() {
    clearTimeout(this.timeoutID);
    const proceed = this.logic.nextState && this.logic.nextState();
    if (!proceed) {
      this.gameState = 'end';
      this.cleanup();
    } else {
      this.updateTable();
      this.timeoutID = setTimeout(this.nextFrame, this.delay);
    }
    this.draw();
  }

  init() {
    this.delay = INITIAL_DELAY;
    this.table = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(null));
    this.logic = new SnakeGameLogic();
    this.updateTable();
    this.draw();
  }

  start() {
    this.gameState = 'running';
    document.addEventListener('keydown', this.handleKeydown);
    this.intervalID = setInterval(() => {
      this.delay *= DELAY_EXPONENT;
    }, 1000);
    this.nextFrame();
  }

  cleanup() {
    document.removeEventListener('keydown', this.handleKeydown);
    clearTimeout(this.timeoutID);
    clearInterval(this.intervalID);
    this.logic.cleanup && this.logic.cleanup();
  }

  draw() {
    render(this.template(), document.querySelector(GAME_ROOT));
  }

  updateTable() {
    const {joints, fruit: f} = this.logic;

    if (!joints || !f) return;

    for (let r of this.table) {
      r.fill(null);
    }

    if (f.y < this.table.length && f.x < this.table[f.y].length) {
      this.table[f.y][f.x] = 'fruit';
    }

    for (let j of joints) {
      if (j.y < this.table.length && j.x < this.table[j.y].length) {
        this.table[j.y][j.x] = 'joint';
      }
    }

    return this.table;
  }

  template() {
    return <div className={`game ${this.gameState === 'end' ? 'end' : ''}`}>
      <div className="table">
        {this.table.map(cols => <div className="table__row">
          {cols.map(cell => <div className={`table__cell ${cell === 'joint' ? 'joint' : cell === 'fruit' ? 'fruit' : ''}`}></div>)}
        </div>)}
      </div>
      <div className="description">
        {
          this.gameState === 'end'
          ? <div>
            <span>기록: {this.logic.joints.length}</span>
            <button className="button restart-button" onClick={e => {this.init(); this.start();}}>다시 시작</button>
          </div>
          : this.gameState === 'running'
          ? <div>
            현재 길이: {this.logic.joints.length}
          </div>
          : <button className="button start-button" onClick={e => this.start()}>게임 시작</button>
        }
      </div>
    </div>
  }
}
