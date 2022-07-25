<script setup></script>
<template>
  <div class="wrapper">
    <img src="@/assets/images/fourth/header-card.svg" alt="" />
    <header class="header">
      <div class="header__title">expenses</div>
      <div class="header__amount">-$898,00</div>
    </header>
    <main>
      <ul>
        <li class="groceries">
          <div class="groceries__pie">53%</div>
          <div class="groceries__content">
            <div>
              <div class="groceries__name">FURNITURE</div>
              <div class="groceries__category">
                <img src="@/assets/images/fourth/category-icon.svg" alt="" />
                <p>APARTMENT</p>
              </div>
            </div>
            <div class="groceries__cost">$498,10</div>
          </div>
          <img
            src="@/assets/images/fourth/direct.svg"
            alt=""
            class="groceries__icon"
          />
        </li>
        <li class="groceries">
          <div class="groceries__pie">53%</div>
          <div class="groceries__content">
            <div>
              <div class="groceries__name">FURNITURE</div>
              <div class="groceries__category">
                <img src="@/assets/images/fourth/category-icon.svg" alt="" />
                <p>APARTMENT</p>
              </div>
            </div>
            <div class="groceries__cost">$498,10</div>
          </div>
          <img
            src="@/assets/images/fourth/direct.svg"
            alt=""
            class="groceries__icon"
          />
        </li>
        <li class="groceries">
          <div class="groceries__pie">53%</div>
          <div class="groceries__content">
            <div>
              <div class="groceries__name">FURNITURE</div>
              <div class="groceries__category">
                <img src="@/assets/images/fourth/category-icon.svg" alt="" />
                <p>APARTMENT</p>
              </div>
            </div>
            <div class="groceries__cost">$498,10</div>
          </div>
          <img
            src="@/assets/images/fourth/direct.svg"
            alt=""
            class="groceries__icon"
          />
        </li>
        <li class="groceries">
          <div class="groceries__pie">53%</div>
          <div class="groceries__content">
            <div>
              <div class="groceries__name">FURNITURE</div>
              <div class="groceries__category">
                <img src="@/assets/images/fourth/category-icon.svg" alt="" />
                <p>APARTMENT</p>
              </div>
            </div>
            <div class="groceries__cost">$498,10</div>
          </div>
          <img
            src="@/assets/images/fourth/direct.svg"
            alt=""
            class="groceries__icon"
          />
        </li>
        <li class="groceries">
          <div class="groceries__pie">53%</div>
          <div class="groceries__content">
            <div>
              <div class="groceries__name">FURNITURE</div>
              <div class="groceries__category">
                <img src="@/assets/images/fourth/category-icon.svg" alt="" />
                <p>APARTMENT</p>
              </div>
            </div>
            <div class="groceries__cost">$498,10</div>
          </div>
          <img
            src="@/assets/images/fourth/direct.svg"
            alt=""
            class="groceries__icon"
          />
        </li>
        <li class="groceries">
          <div class="groceries__pie">53%</div>
          <div class="groceries__content">
            <div>
              <div class="groceries__name">FURNITURE</div>
              <div class="groceries__category">
                <img src="@/assets/images/fourth/category-icon.svg" alt="" />
                <p>APARTMENT</p>
              </div>
            </div>
            <div class="groceries__cost">$498,10</div>
          </div>
          <img
            src="@/assets/images/fourth/direct.svg"
            alt=""
            class="groceries__icon"
          />
        </li>
      </ul>
    </main>
    <nav class="navbar">
      <a class="navbar__item" href="/credit-cards-layout#">
        <img src="@/assets/images/second/nav-icon-01.svg" alt="" />
      </a>
      <a class="navbar__item" href="/credit-cards-layout#second">
        <img src="@/assets/images/second/nav-icon-02.svg" alt="" />
      </a>
      <a class="navbar__item" href="/credit-cards-layout#third">
        <img src="@/assets/images/second/nav-icon-03.svg" alt="" />
      </a>
      <a class="navbar__item" href="/credit-cards-layout#fourth">
        <img src="@/assets/images/second/nav-icon-04.svg" alt="" />
      </a>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
html {
  box-sizing: border-box;
  font-size: 6.25%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-size: 16rem;
}

.wrapper {
  width: 375px;
  margin: 0 auto;
  background: #fbfbfb;
  border-radius: 40px;
  padding-bottom: 40px;
  color: #2f333c;
  > img {
    display: block;
    width: 278px;
    margin: -266px auto 0 auto;
    filter: drop-shadow(0 0 15px #e42c63b3);
  }
}

.header {
  margin: 35px auto 16px 45px;
  &__title {
    font-size: 13rem;
    line-height: 15rem;
    text-transform: uppercase;
  }
  &__amount {
    margin-top: 5px;
    margin-bottom: 31px;
    font-size: 37rem;
    line-height: 43rem;
    text-transform: uppercase;
  }
}

.groceries {
  display: flex;
  // justify-content: flex-start;
  align-items: center;
  width: 290px;
  margin: 15px auto;

  &__pie {
    --circle-width: 7px;
    --circle-color: #614ad3;
    --circle-color-end: #e42c64;
    --circle-percent: 50;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    aspect-ratio: 1;
    border: 6px solid #cbccc466;
    border-radius: 50%;
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
          var(--circle-color) 0,
          var(--circle-color-end) calc(var(--circle-percent) * 1%),
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
        var(--circle-color-end) calc(var(--circle-width) / 2),
        transparent calc(var(--circle-width) / 2)
      );
      transform: rotate(calc(3.6deg * var(--circle-percent)));
    }
  }
  &__content {
    display: flex;
    justify-content: space-between;
    width: 212px;
    height: 41px;
    margin-left: 10px;
  }
  &__name {
    font-size: 14rem;
    line-height: 16rem;
    text-transform: capitalize;
  }
  &__category {
    display: flex;
    margin-top: 6px;
    font-family: "Open Sans";
    font-size: 13rem;
    line-height: 18px;
    text-transform: uppercase;
    img {
      margin-right: 5px;
    }
  }
  &__cost {
    font-weight: 700;
    font-size: 16rem;
    line-height: 19rem;
    text-transform: uppercase;
  }
  &__icon {
    margin-left: auto;
  }
}

.navbar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 315px;
  height: 75px;
  margin: 43px auto 0 auto;
  background: #f1f3f6;
  border-radius: 20px;

  &__item {
    position: relative;
    img {
      width: 26px;
      height: 26px;
      filter: invert(1);
    }
    &:hover::after {
      content: "";
      position: absolute;
      left: calc(50%);
      bottom: -10px;
      width: 2px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #b7a9ff;
      box-shadow: #b7a9ff 0 0 4px 4.5px;
    }
  }
}
</style>
