<script setup>
import { onMounted, ref } from "vue";

const cards = ref([]);
const handleHorizenSlide = (e) => {
  const scrollContainer = document.querySelector(".slide-container");
  scrollContainer.scrollLeft += e.deltaY * 2;
};

const scrollToElement = (e) => {
  e.target.scrollIntoView();
};
onMounted(() => {
  //
});
</script>
<template>
  <div class="wrapper">
    <header>MARTINA WOLNA</header>
    <main>
      <div class="slider">
        <div
          class="slide-container"
          @wheel.prevent="handleHorizenSlide($event)"
          @click="scrollToElement($event)"
        >
          <div class="card">
            <img class="card__item" src="@/assets/images/card-01.svg" alt="" />
            <img
              class="card__float"
              src="@/assets/images/card-01-float.svg"
              alt=""
            />
          </div>
          <div class="card">
            <img class="card__item" src="@/assets/images/card-01.svg" alt="" />
            <img
              class="card__float"
              src="@/assets/images/card-01-float.svg"
              alt=""
            />
          </div>
          <div class="card">
            <img class="card__item" src="@/assets/images/card-01.svg" alt="" />
            <img
              class="card__float"
              src="@/assets/images/card-01-float.svg"
              alt=""
            />
          </div>
          <div class="card">
            <img class="card__item" src="@/assets/images/card-01.svg" alt="" />
            <img
              class="card__float"
              src="@/assets/images/card-01-float.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="account-info">
        <div class="account-info__content">
          <div class="account-info__title">YOUR MONEY</div>
          <div class="account-info__money">$898,00</div>
        </div>
        <div class="account-info__more">
          <img src="@/assets/images/account-info-icon.svg" alt="" />
        </div>
      </div>
      <div class="analysis">
        <div class="analysis__title">MONEY SPENT</div>
        <div class="analysis__info">
          <div class="analysis__item">
            <div class="analysis__circle">$208,00</div>
            LAST MONTH
          </div>
          <div class="analysis__item">
            <div class="analysis__circle" style="--spent-percent: 60%">
              $328,00
            </div>
            THIS MONTH
          </div>
        </div>
      </div>
    </main>
    <nav class="nav">
      <div class="nav__border-wrap">
        <div class="nav__icon" >
          <img
            src="@/assets/images/nav-icon-01.svg"
            alt=""
            style="
              --nav-icon-reverse: url('/src/assets/images/nav-icon-01-reverse.svg');
            "
          />
        </div>
        <div class="nav__icon">
          <img
            src="@/assets/images/nav-icon-02.svg"
            alt=""
            style="
              --nav-icon-reverse: url('/src/assets/images/nav-icon-02-reverse.svg');
            "
          />
        </div>
        <div class="nav__icon">
          <img
            src="@/assets/images/nav-icon-03.svg"
            alt=""
            style="
              --nav-icon-reverse: url('/src/assets/images/nav-icon-03-reverse.svg');
            "
          />
        </div>
        <div class="nav__icon">
          <img
            src="@/assets/images/nav-icon-04.svg"
            alt=""
            style="
              --nav-icon-reverse: url('/src/assets/images/nav-icon-04-reverse.svg');
            "
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
* {
  --spent-percent: 40%;
  --card-slide-height: 270px;
  --nav-icon-reverse: url("/src/assets/images/nav-icon-01-reverse.svg");
}
.wrapper {
  font-family: "Roboto";
  font-size: 16rem;
  max-width: 375px;
  margin: 0 auto;
  background: linear-gradient(180deg, #9ea3f7 0%, rgba(178, 182, 248, 0) 100%);
  border-radius: 45px;
}

header {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 17rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #352b73;
  padding-top: 54px;
  padding-left: 45px;
  line-height: 26px;
}
.slide-container {
  display: flex;
  overflow-y: auto;
  scrollbar-width: none;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    display: none;
  }
}
.card {
  position: relative;
  margin-top: 50rem;
  padding: 8rem;
  scroll-snap-align: center;
  scroll-snap-stop: always;

  &:first-child {
    margin-left: 20rem;
  }
  &:last-child {
    margin-right: 20rem;
  }
  &__float {
    position: absolute;
    padding: 5rem;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  &:hover > &__float {
    opacity: 1;
    top: -30px;
    left: -8px;
  }
}
.account-info {
  width: 80%;
  margin: 30rem auto 0 auto;
  justify-content: space-between;
  display: flex;
  align-items: end;
  font-family: "Poppins";
  letter-spacing: 1px;
  color: #352b73;

  &__title {
    font-size: 17px;
    text-transform: uppercase;
  }

  &__money {
    font-size: 37px;
    text-transform: uppercase;
    margin-top: 5rem;
  }
}
.analysis {
  width: 80%;
  margin: 3rem auto 0 auto;
  font-family: "Poppins";
  font-size: 17px;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 40rem;
  color: #352b73;
  &__info {
    display: flex;
    justify-content: space-between;
  }
  &__item {
    text-align: center;
    font-size: 11rem;
  }
  &__circle {
    display: flex;
    color: #fff;
    font-size: 15px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    width: 131px;
    height: 131px;
    margin: 20rem 0;
    box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.4),
      inset 0 0 4px 4px rgba(255, 255, 255, 0.4);

    &::after {
      content: "";
      position: absolute;
      width: 149px;
      height: 149px;
      border-radius: 50%;
      background: conic-gradient(
          #e42c64 calc(var(--spent-percent) / 2),
          #614ad3 var(--spent-percent),
          transparent 0 100%
        )
        border-box;
      mask: url("@/assets/images/circle-clip.svg");
      -webkit-mask: url("@/assets/images/circle-clip.svg");
      mask-size: contain;
      -webkit-mask-size: contain;
      filter: blur(4px);
    }
  }
}
.nav {
  margin-top: 50rem;
  width: 100%;
  height: 90px;
  padding: 2px;
  border-radius: 45px;
  background: linear-gradient(
    120deg,
    rgb(255, 255, 255) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  &__border-wrap {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 45px;
    height: 86px;
    background: rgba(216, 206, 255, 0.2) 100%;
    padding: 3px;
  }
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    border-radius: 20px;
    box-shadow: 0 0 4px 0px #614ad3, inset 0 0 4px 0px #614ad3;
    background: rgba(255, 255, 255, 0.2);
    transition: all 0.5s ease-in-out;
    img {
      width: 25px;
      height: 25px;
    }
    &:hover {
      box-shadow: 0 0 2px 2px #614ad3, inset 0 0 2px 2px #614ad3;
      background: #614ad3;
      img {
        content: var(--nav-icon-reverse);
      }
    }
  }
}
</style>
