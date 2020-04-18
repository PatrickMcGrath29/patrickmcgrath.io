<template>
  <section id="skills">
    <div class="container">
      <div class="primary-header center">
        <h1>
          Skills
        </h1>
      </div>
      <div class="skills__wrapper">
        <el-card class="skills__group skills__group-key-wrapper">
          <div class="skills__group-key">
            <h3 class="skills__group-header">Key</h3>
            <div class="skills__term-wrapper">
              <div
                v-for="(skill, index) in skillsJson.proficiency_key"
                :key="index"
                class="skills__term"
              >
                <div class="skills__proficiency-indicator" :class="skill"></div>
                <div class="skills__term-content">{{ skill }}</div>
              </div>
            </div>
          </div>
        </el-card>
        <el-card
          v-for="(skill_group, index) in sortedSkills.data"
          :key="index"
          class="skills__group"
        >
          <h3 class="skills__group-header">{{ skill_group.group_name }}</h3>
          <div v-if="skill_group.terms" class="skills__term-wrapper">
            <div
              v-for="(skill, index) in skill_group.terms"
              :key="index"
              class="skills__term"
            >
              <div
                v-if="'proficiency' in skill"
                class="skills__proficiency-indicator"
                :class="skillsJson.proficiency_key[skill.proficiency]"
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
import SkillsJson from '@/json/skills.json'

export default {
  name: 'Skills',
  data: () => {
    return {
      skillsJson: SkillsJson
    }
  },
  computed: {
    sortedSkills() {
      if (this.skillsJson.data) {
        this.skillsJson.data.map((group) => {
          group.terms.sort((a, b) => {
            if ('proficiency' in a && 'proficiency' in b) {
              return parseInt(a.proficiency) > parseInt(b.proficiency) ? -1 : 1
            } else {
              return 0
            }
          })
        })
      }
      return this.skillsJson
    }
  },
  head() {
    return {
      title: 'Patrick McGrath | Skills'
    }
  }
}
</script>
