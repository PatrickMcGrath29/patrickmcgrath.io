<template>
  <section id="skills">
    <div class="container">
      <div class="primary-header center">
        <h1>
          Areas of Interest
        </h1>
      </div>
      <div class="skills__wrapper">
        <el-card class="skills__group skills__group-key-wrapper">
          <div class="skills__group-key">
            <h3 class="skills__group-header">Key</h3>
            <div class="skills__term-wrapper">
              <div
                v-for="(rating,
                proficiencyIndex) in interestsJson.proficiency_key"
                :key="rating"
                class="skills__term"
              >
                <div
                  class="skills__proficiency-indicator"
                  :class="'proficiency_key_' + proficiencyIndex"
                ></div>
                <div class="skills__term-content">{{ rating }}</div>
              </div>
            </div>
          </div>
        </el-card>
        <el-card
          v-for="(skill_group, skillGroupIndex) in sortedInterests.data"
          :key="skillGroupIndex"
          class="skills__group"
        >
          <h3 class="skills__group-header">{{ skill_group.group_name }}</h3>
          <div v-if="skill_group.terms" class="skills__term-wrapper">
            <div
              v-for="(skill, skillTermIndex) in skill_group.terms"
              :key="skillTermIndex"
              class="skills__term"
            >
              <div
                v-if="'proficiency' in skill"
                class="skills__proficiency-indicator"
                :class="'proficiency_key_' + skill.proficiency"
              ></div>
              <div class="skills__term-content">{{ skill.name }}</div>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </section>
</template>

<script>
import interestsJson from '@/json/interests.json'

export default {
  name: 'Skills',
  data: () => {
    return {
      interestsJson
    }
  },
  computed: {
    sortedInterests() {
      if (this.interestsJson.data) {
        this.interestsJson.data.map((group) => {
          group.terms.sort((a, b) => {
            if ('proficiency' in a && 'proficiency' in b) {
              return parseInt(a.proficiency) > parseInt(b.proficiency) ? -1 : 1
            } else {
              return 0
            }
          })
        })
      }
      return this.interestsJson
    }
  },
  head() {
    return {
      title: 'Patrick McGrath | Areas of Interest'
    }
  }
}
</script>
