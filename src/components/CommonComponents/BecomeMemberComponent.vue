<template>
    <div class="member-container">
        <div class="member-content">
            <section class="member-content__signUp">
                <div class="member-content__signUp__title">
                    <h3>Become member</h3>
                    <img src="@/assets/Bm_line.svg" alt="line">
                </div>
                <h1>Ready to try different work experience now?</h1>
                <p>Get the best working experience that you never feel before</p>
                <div class="member-content__signUp__btn">
                    <router-link to="/signUp" id="signUp">SIGN UP NOW</router-link>
                </div>
            </section>
            <section class="member-content__smiling_man">
                <img src="@/assets/smiling_man.png" alt="A smiling man" class="smiling_man__img">
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
$container_color: #231F20;
$button_color: #FF5A00;
@function toRem($value) {
    $remValue: ($value / 16) + rem;
    @return $remValue;
}
.member-container {
    width: 100%;
    height: auto;
    background-color: $container_color;

    .member-content {
        max-width: 1280px;
        width: 100%;
        padding: 0 1rem;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        &__signUp {
            width: 49%;
            font-style: normal;
            color: #FFFFFF;
            font-size: toRem(20);
            font-family: 'Lato', sans-serif;
            &__title {
                display: flex;
                img {
                    align-self: center;
                }
            }
            h1 {
                font-family: 'Roboto Condensed', sans-serif;
                font-weight: 700;
                font-size: toRem(40);
                line-height: toRem(47);
                margin-bottom: 24px;
                margin-top: 8px;
            }
            h3 {
                font-weight: 500;
                line-height: toRem(30);
                margin: 0 10px 0 0;
            }
            p {
                font-weight: 400;
                line-height: toRem(30);
                margin-bottom: 33px;
            }
            &__btn {
                display: inline-block;
                padding: 12.5px 100px;
                background-color: $button_color;
                border: none;
                max-width: 350px;
                min-width: 200px;
                text-align: center;
                a {
                    text-decoration: none;
                    color: #FFFFFF;
                    font-family: 'Lato', sans-serif;
                    font-weight: 700;
                    font-size: toRem(18);
                    line-height: toRem(28);
                    margin: 0;
                }
            }
        }

        &__smiling_man {
            display: inline-block;
            width: 49%;
            background-image: url("@/assets/BM_Pattern.svg");
            background-position: right;
            background-repeat: no-repeat;
            background-size: contain;
            text-align: right;
            height: 100%;
            overflow: hidden;
            .smiling_man__img {
                max-width:100%;
                max-height:100%;
            }
        }
    }
}
</style>
