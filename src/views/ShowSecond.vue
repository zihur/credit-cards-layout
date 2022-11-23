<script setup></script>
<template>
  <div class="wrapper">
    <div class="header">MARTINA WOLNA</div>
    <div class="slideshow">
      <ul class="card">
        <li class="card__item card__item--active">
          <img src="@/assets/images/second/card-01.svg" alt="" />
        </li>
        <li class="card__item">
          <img src="@/assets/images/second/card-01.svg" alt="" />
        </li>
        <li class="card__item">
          <img src="@/assets/images/second/card-01.svg" alt="" />
        </li>
        <li class="card__item">
          <img src="@/assets/images/second/card-01.svg" alt="" />
        </li>
      </ul>
      <div class="slideshow__snapper">
        <div class="slideshow__snap"></div>
        <div class="slideshow__snap"></div>
        <div class="slideshow__snap"></div>
        <div class="slideshow__snap"></div>
      </div>
    </div>
    <ul class="toolbar">
      <li class="toolbar__item">
        <div>
          <img src="@/assets/images/second/copy-number.svg" alt="" />
        </div>
        <div class="toolbar__txt">Copy Card Number</div>
      </li>
      <li class="toolbar__item">
        <img src="@/assets/images/second/show-cvv.svg" alt="" />
        <div class="toolbar__txt">SHOW CVV</div>
      </li>
    </ul>
    <div class="acct">
      <div class="acct__info">
        <h3>Your Money</h3>
        <div class="acct__money">$898,00</div>
      </div>
      <img
        src="@/assets/images/second/acct-more.svg"
        alt=""
        class="acct__more"
      />
    </div>
    <div class="analysis">
      <div class="analysis__title">Money Spent</div>
      <div class="analysis__content">
        <div class="pie">
          <div
            class="pie__circle pie__circle--opacity"
            style="--color-start: #5e5a5a; --color-end: #bec7d7; --percent: 30"
          >
            $208,00
          </div>
          <div class="pie__name">Last Month</div>
        </div>
        <div class="pie">
          <div class="pie__circle" style="--percent: 60">$328,00</div>
          <div class="pie__name">This Month</div>
        </div>
      </div>
    </div>
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

.header {
  margin-left: 45px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 17rem;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.slideshow {
  margin-top: 3.5px;
  &__snapper {
    display: flex;
    justify-content: center;
    margin-top: 10.2px;
  }
  &__snap {
    width: 4px;
    aspect-ratio: 1;
    background: #c4c4c430;
    border-radius: 50%;
    margin: 0 4.5px;
  }
}

.card {
  display: flex;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &__item {
    padding: 5.5px;
    filter: saturate(0.5);
    img {
      vertical-align: middle;
    }
    &--active {
      position: relative;
      filter: saturate(1);
      z-index: 0;
      &::after {
        content: "";
        z-index: -1;
        position: absolute;
        inset: 20px 0;
        background: linear-gradient(to right, #614ad3 8%, #e42c64 74%);
        filter: blur(15px);
        opacity: 0.5;
        transition: opacity 0.3s;
      }
    }

    &:first-child {
      margin-left: 37px;
    }
    &:last-child {
      margin-right: 36.5px;
    }
  }
}

.toolbar {
  display: flex;
  margin: 26px 20px 0 35px;
  justify-content: space-between;
  &__item {
    display: flex;
    align-items: center;
    height: 47px;
    border-radius: 20px;
    background: #2f333c;
    padding: 8px;
    img {
      margin-right: 8px;
    }
  }
  &__txt {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 12rem;
    line-height: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}
.acct {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 300px;
  margin: 28px auto 0 45px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  &__info {
    h3 {
      font-size: 13rem;
      line-height: 15px;
      letter-spacing: 1px;
    }
  }
  &__money {
    margin-top: 5px;
    font-size: 37rem;
    line-height: 43px;
  }
  &__more {
    vertical-align: middle;
  }
}

.analysis {
  &__title {
    margin-top: 22px;
    margin-left: 45px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 13rem;
    line-height: 15px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  &__content {
    display: flex;
    width: 301px;
    justify-content: space-between;
    margin-left: 39px;
  }
}

.pie {
  --percent: 0;
  --stroke-width: 7px;
  --color-start: #614ad3;
  --color-end: #e42c64;

  text-align: center;
  font-family: "Roboto";
  font-style: normal;
  text-transform: uppercase;
  font-weight: 500;

  &__circle {
    position: relative;
    display: flex;
    width: 135px;
    aspect-ratio: 1;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
    margin-bottom: 20px;
    border-radius: 50%;
    border: var(--stroke-width) solid rgba(203, 204, 196, 0.4);
    font-size: 19rem;
    line-height: 22px;
    &::before {
      content: "";
      position: absolute;
      border-radius: 50%;
      inset: calc(0px - var(--stroke-width));
      background: radial-gradient(
          circle at 50% calc(var(--stroke-width) / 2),
          var(--color-start) calc(var(--stroke-width) / 2),
          transparent calc(var(--stroke-width) / 2)
        ),
        conic-gradient(
          var(--color-start) calc(var(--percent) * 1% / 2),
          var(--color-end) calc(var(--percent) * 1%),
          transparent 0 100%
        );
      mask: radial-gradient(
        farthest-side,
        transparent calc(100% - var(--stroke-width)),
        black calc(100% - var(--stroke-width))
      );
      -webkit-mask: radial-gradient(
        farthest-side,
        transparent calc(100% - var(--stroke-width)),
        black calc(100% - var(--stroke-width))
      );
    }
    &::after {
      content: "";
      position: absolute;
      inset: calc(0px - var(--stroke-width));
      background: radial-gradient(
        circle at 50% calc(var(--stroke-width) / 2),
        var(--color-end) calc(var(--stroke-width) / 2),
        transparent calc(var(--stroke-width) / 2)
      );
      transform: rotate(calc(3.6deg * var(--percent)));
    }
    &--opacity {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  &__name {
    font-size: 11rem;
    line-height: 13px;
    letter-spacing: 1px;
  }
}

.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 315px;
  height: 75px;
  margin: 21px auto 0 auto;
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
