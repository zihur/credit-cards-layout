<script setup></script>
<template>
  <div class="wrapper">
    <header>
      <div class="header__title">STATISTICS</div>
      <div class="header__year">2020</div>
    </header>
    <div class="spent">
      <div class="spent__inner">
        <div class="spent__title">MONEY SPENT</div>
        <div class="spent__money">$10 345,00</div>
      </div>
      <div class="spent__note">
        <img src="@/assets/images/third/spent-more.svg" alt="" />
      </div>
    </div>
    <div class="spent-last-year">
      <div class="spent-last-year__inner">
        <div class="spent-last-year__title opacity-50">
          COMPARISON TO LAST YEAR
        </div>
        <div class="spent-last-year__note opacity-50">2019</div>
      </div>
      <div class="spent-last-year__inner">
        <div class="spent-last-year__money opacity-50">$9 905,00</div>
        <div class="spent-last-year__compare">$440</div>
      </div>
    </div>
    <div class="bar-chart">
      <ul class="bar-chart__inner">
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent" style="--bar-percent: 6"></li>
            <li class="bar-chart__percent" style="--bar-percent: 40"></li>
          </ul>
          <div class="bar-chart__month-hint">J</div>
        </li>
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
          </ul>
          <div class="bar-chart__month-hint">F</div>
        </li>
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
          </ul>
          <div class="bar-chart__month-hint">M</div>
        </li>
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent" style="--bar-percent: 30"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent" style="--bar-percent: 30"></li>
            <li class="bar-chart__percent"></li>
          </ul>
          <div class="bar-chart__month-hint">A</div>
        </li>
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent" style="--bar-percent: 30"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
          </ul>
          <div class="bar-chart__month-hint">M</div>
        </li>
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
          </ul>
          <div class="bar-chart__month-hint">J</div>
        </li>
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
          </ul>
          <div class="bar-chart__month-hint">J</div>
        </li>
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent" style="--bar-percent: 30"></li>
            <li class="bar-chart__percent"></li>
          </ul>
          <div class="bar-chart__month-hint">A</div>
        </li>
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
          </ul>
          <div class="bar-chart__month-hint">S</div>
        </li>
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent" style="--bar-percent: 27"></li>
            <li class="bar-chart__percent" style="--bar-percent: 30"></li>
          </ul>
          <div class="bar-chart__month-hint">O</div>
        </li>
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
          </ul>
          <div class="bar-chart__month-hint">N</div>
        </li>
        <li class="bar-chart__months">
          <ul class="bar-chart__data">
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
            <li class="bar-chart__percent"></li>
          </ul>
          <div class="bar-chart__month-hint">D</div>
        </li>
      </ul>
    </div>
    <ul class="pie-chart">
      <li class="pie-chart__category">
        <div class="pie-chart__circle">
          <img
            src="@/assets/images/third/pie-house.svg"
            alt=""
            class="pie-chart__icon"
          />
          <p>HOUSE</p>
        </div>
        <div class="pie-chart__money">$1223,00</div>
      </li>
      <li class="pie-chart__category">
        <div
          class="pie-chart__circle"
          style="--circle-color: #03a9f1; --circle-percent: 60"
        >
          <img
            src="@/assets/images/third/pie-car.svg"
            alt=""
            class="pie-chart__icon"
          />
          <p>CAR</p>
        </div>
        <div class="pie-chart__money">$4528,00</div>
      </li>
      <li class="pie-chart__category">
        <div
          class="pie-chart__circle"
          style="--circle-color: #09f9bf; --circle-percent: 30"
        >
          <img
            src="@/assets/images/third/pie-food.svg"
            alt=""
            class="pie-chart__icon"
          />
          <p>FOOD</p>
        </div>
        <div class="pie-chart__money">$201,00</div>
      </li>
    </ul>
    <nav class="navbar">
      <a class="navbar__item" href="/">
        <img src="@/assets/images/second/nav-icon-01.svg" alt="" />
      </a>
      <a class="navbar__item" href="/second">
        <img src="@/assets/images/second/nav-icon-02.svg" alt="" />
      </a>
      <a class="navbar__item" href="/third">
        <img src="@/assets/images/second/nav-icon-03.svg" alt="" />
      </a>
      <a class="navbar__item" href="/fourth">
        <img src="@/assets/images/second/nav-icon-04.svg" alt="" />
      </a>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
*,
html,
body {
  box-sizing: border-box;
  font-size: 6.25%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
}

// utils
.opacity-50 {
  opacity: 0.5;
}

.wrapper {
  width: 375px;
  margin: 0 auto;
  background: #282b33;
  border-radius: 40px;
  padding-top: 60px;
  padding-bottom: 40px;
  font-size: 16rem;
  color: #ffffff;
}

header {
  display: flex;
  justify-content: space-between;
  width: 285px;
  margin: 0 auto;
  font-size: 17rem;
  line-height: 20rem;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.spent {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 285px;
  margin: 20px auto 0 auto;

  &__title {
    font-weight: 400;
    font-size: 13rem;
    line-height: 15rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  &__money {
    margin-top: 5px;
    font-weight: 400;
    font-size: 37rem;
    line-height: 43rem;
    text-transform: uppercase;
  }

  &__note {
    margin-top: -6.8px;
  }
}

.spent-last-year {
  width: 285px;
  margin: 0 auto;
  padding-top: 1px;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
  &__title,
  &__note {
    margin-top: 7px;
    font-weight: 400;
    font-size: 13rem;
    line-height: 15rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  &__money,
  &__compare {
    margin-top: 5px;
    font-weight: 400;
    font-size: 37rem;
    line-height: 43rem;
    text-transform: uppercase;
  }
  &__compare {
    color: #f103ae;
    font-weight: 300;
  }
  &__compare::after {
    content: url("@/assets/images/third/arrow-top.svg");
    margin-left: 7px;
    margin-right: -3px;
  }
}

.bar-chart {
  --bar-width: 7px;
  --bar-percent: 10;

  width: 284px;
  height: 203px;
  margin: 33px auto 0 auto;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
  &__months {
    position: relative;
    display: flex;
    align-items: flex-end;
    width: var(--bar-width);
    height: 203px;
    border-radius: 10px;
    background-color: #484b50;
  }
  &__data {
    display: flex;
    flex-direction: column;
  }
  &__percent {
    width: var(--bar-width);
    height: calc(var(--bar-percent) * 203px / 100);
    background-color: #fff;
    border-radius: 10px;

    &:nth-child(1) {
      background-color: #ea23fb;
    }
    &:nth-child(2) {
      background-color: #837dff;
    }
    &:nth-child(3) {
      background-color: #09f9bf;
    }
    &:nth-child(4) {
      background-color: #03a9f1;
    }
    &:nth-child(5) {
      background-color: #e42c64;
    }
  }
  &__month-hint {
    position: absolute;
    bottom: -25px;
    font-size: 13rem;
    line-height: 15rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}

.pie-chart {
  display: flex;
  margin-top: 52px;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  &__category {
    display: flex;
    flex-direction: column;
    margin: 0 16px;
    text-align: center;
    &:first-child {
      margin-left: 36px;
    }
    &:last-child {
      margin-right: 36px;
    }
  }

  &__circle {
    --circle-width: 7px;
    --circle-color: #e42c64;
    --circle-percent: 50;

    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 98px;
    aspect-ratio: 1;
    border: var(--circle-width) solid #cbccc466;
    border-radius: 50%;
    img {
      max-width: 30px;
      vertical-align: middle;
      filter: drop-shadow(0 5px 5px #c4c4c4);
    }
    p {
      font-size: 13px;
      line-height: 15px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    &::before {
      content: "";
      position: absolute;
      inset: calc(0px - var(--circle-width));
      border-radius: 50%;
      background: radial-gradient(
          circle at 50% calc(var(--circle-width) / 2),
          var(--circle-color) calc(var(--circle-width) / 2),
          transparent calc(var(--circle-width) / 2)
        ),
        conic-gradient(
          var(--circle-color) 0 calc(var(--circle-percent) * 1%),
          transparent 0 calc(var(--circle-percent) * 1%)
        );
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - var(--circle-width)),
        black calc(100% - var(--circle-width))
      );
      -webkit-mask: radial-gradient(
        farthest-side,
        transparent calc(100% - var(--circle-width)),
        black calc(100% - var(--circle-width))
      );
    }
    &::after {
      content: "";
      position: absolute;
      inset: calc(0px - var(--circle-width));
      border-radius: 50%;
      background: radial-gradient(
        circle at 50% calc(var(--circle-width) / 2),
        var(--circle-color) calc(var(--circle-width) / 2),
        transparent calc(var(--circle-width) / 2)
      );
      transform: rotate(calc(3.6deg * var(--circle-percent)));
    }
  }
  &__money {
    margin-top: 14px;
    font-size: 19px;
    line-height: 22px;
    text-transform: uppercase;
  }
}

.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 315px;
  height: 75px;
  margin: 43px auto 0 auto;
  background: #2f333c;
  border-radius: 20px;

  &__item {
    position: relative;
    img {
      width: 26px;
      height: 26px;
    }
    &:hover::after {
      content: "";
      position: absolute;
      left: calc(50%);
      bottom: -10px;
      width: 2px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #614ad3;
      box-shadow: #614ad3 0 0 4px 4.5px;
    }
  }
}
</style>
