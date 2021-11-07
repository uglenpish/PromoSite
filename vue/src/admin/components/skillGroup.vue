<template lang="pug">
    .group.group__new
        .group__title
            .group__title-header(v-if="!showForm")
                .heder__category {{ skillGroup.title }}
                .group__btns-wrap
                    button(type="button").edit-btn
            form(
                @submit.prevent="createNewCategory"
                v-else
            ).group__title-form
                input(
                    placeholder="Название новой группы"
                    name="group-name"
                    v-model="categoryTitle"
                ).group__input.group__name-group
                .group__btns-wrap
                    button(type="submit").btn-true.btn-true_active
                    button(type="button").btn-false.btn-false_active
        .group__skills
            ul.group__skills-list
                li.group__skills-item
                    skill
        .group__skill-add
            input(placeholder="Новый навык" name="add-prof").group__skill-name.group__input
            input(placeholder="100%" name="add-percent" type="number" min="0" max="100").group__skill-percent.group__input
            button(type="button" name="group-add" disabled="true").group__btn
                .group__btn-wrap
                    .btn-plus
</template>

<script>
import skill from './skill';
import { CREATE_CATEGORIES } from "../store/action.type";

export default {

    components: {
        skill,
    },
    data() {
        return {
            categoryTitle: "",
            newSkill: {
                percent: 0,
                title: '',
                category_id: 0,
            },
            showForm: false,
        }
    },
    props: {
        skillGroup: {
            type: Object,
            default: () => {},
        }
    },
    methods: {
        createNewCategory() {
            this.$store.dispatch(CREATE_CATEGORIES, {
                title: this.categoryTitle
            });
            this.showForm = true;
        },
    }
}
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.skill-group{
  margin-left: -30px;
  display: flex;
  flex-wrap: wrap;
}

.group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20Px;

  min-width: 300Px;
  min-height: 390Px;
  background-color: #fff;
  box-shadow: 4.096px 2.868px 20px 0px rgba(0, 0, 0, 0.1);

  @include tablets {
    max-width: 530Px;
    width: 100%;
  }
  @include phones {
    max-width: 100%;
    padding: 20Px 0;
  }

  &__title {
    border-bottom: 1px solid rgba($text-color, .3);
    padding: 0 10px 20px;
  }

  &__input {
    position: relative;
    display: block;
    border: none;
    outline: none;
    background: transparent;
    border-bottom: 1px solid transparent;
    color: inherit;
    font-weight: 600;
    line-height: inherit;
    font-size: 18px;
    &::placeholder {
      font-size: 16px;
      color: rgba($text-color, .3);
    }
    &:focus::placeholder {
      color: transparent;
    }
    &:focus {
      border-bottom: 1px solid $text-color;
    }
  }
  &__name-group {
    width: 62%;
  }
  &__skill-name {
    width: 40%;
    border-bottom: 1px solid $text-color;
  }
  &__skill-percent {
    width: 17%;
    margin-left: 10px;
    text-align: center;
    border-bottom: 1px solid $text-color;
  }
  &__skills {
    flex: 1;
    height: 100%;
    padding: 10px;
  }
  &__skill-add {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
  }
  &__btn {
    margin-left: 20px;
    &-wrap {
      width: 40px;
      height: 40px;
    }
  }
}

.group__btns-wrap{
  margin-left: 10px;
  min-width: 50px;
  justify-content: space-between;
  display: flex;
  align-items: center;
}

.group__title-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.group__title-form{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.group__skill-list {
  display: flex;
  flex-direction: column;
}

.group__skill-item {
  display: flex;
  padding: 8px 0;

  &:last-child {
    margin-bottom: 0;
  }
}
</style>