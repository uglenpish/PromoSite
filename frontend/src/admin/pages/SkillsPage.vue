<template>
  <div class="stack">
    <AppCard>
      <template #title>
        <h3>Добавить группу навыков</h3>
      </template>

      <form class="grid-form" @submit.prevent="createGroup">
        <FormField v-model="groupForm.title" label="Название группы" placeholder="Frontend" />
        <button class="button" type="submit">Сохранить группу</button>
      </form>
    </AppCard>

    <AppCard>
      <template #title>
        <h3>Группы и навыки</h3>
      </template>

      <EmptyState
        v-if="!skillsStore.skills.length"
        title="Пока нет групп"
        description="Создайте первую группу навыков для блока «Обо мне»."
      />

      <div v-else class="entity-stack">
        <article class="entity-card" v-for="group in skillsStore.skills" :key="group.id">
          <div class="entity-card__head">
            <div>
              <h4>{{ group.title }}</h4>
              <p>{{ group.skills.length }} навыков</p>
            </div>
            <button class="button button--ghost" @click="removeGroup(group.id)">Удалить группу</button>
          </div>

          <ul class="inline-list" v-if="group.skills.length">
            <li class="pill" v-for="skill in group.skills" :key="skill.id">
              <span>{{ skill.title }} {{ skill.percent }}%</span>
              <button class="pill__action" @click="removeSkill(skill.id)">×</button>
            </li>
          </ul>

          <form class="grid-form grid-form--skills" @submit.prevent="createSkill(group.id)">
            <FormField
              v-model="skillForms[group.id].title"
              label="Навык"
              placeholder="Vue 3"
            />
            <FormField
              v-model="skillForms[group.id].percent"
              label="Процент"
              type="number"
              min="0"
              max="100"
              placeholder="80"
            />
            <button class="button" type="submit">Добавить навык</button>
          </form>
        </article>
      </div>
    </AppCard>
  </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import AppCard from "@/admin/components/AppCard.vue";
import EmptyState from "@/admin/components/EmptyState.vue";
import FormField from "@/admin/components/FormField.vue";
import { useSkillsStore } from "../../stores/skillsStore";

const skillsStore = useSkillsStore();

const groupForm = reactive({
  title: ""
});
const skillForms = reactive({});

function ensureSkillForm(groupId) {
  if (!skillForms[groupId]) {
    skillForms[groupId] = {
      title: "",
      percent: ""
    };
  }
}

function initForms() {
  skillsStore.skills.forEach((group) => ensureSkillForm(group.id));
}

async function createGroup() {
  if (!groupForm.title.trim()) {
    return;
  }

  await skillsStore.createGroup(groupForm.title.trim());
  groupForm.title = "";
  initForms();
}

async function removeGroup(id) {
  await skillsStore.deleteGroup(id);
  initForms();
}

async function createSkill(groupId) {
  ensureSkillForm(groupId);
  const form = skillForms[groupId];

  if (!form.title.trim()) {
    return;
  }

  await skillsStore.createSkill(groupId, form.title.trim(), form.percent);

  skillForms[groupId] = {
    title: "",
    percent: ""
  };
}

async function removeSkill(id) {
  await skillsStore.deleteSkill(id);
}

onMounted(async () => {
  await skillsStore.loadSkills();
  initForms();
});
</script>
