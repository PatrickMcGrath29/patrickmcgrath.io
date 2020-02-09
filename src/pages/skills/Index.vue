<template>
  <default-template>
    <section id="skills">
      <div class="container">
        <div class="skills__introduction">
          <h1>
            <span class="heading-bracket bracket-left">[</span>Skills
            <span class="heading-bracket bracket-right">]</span>
          </h1>
        </div>
        <div class="skills__wrapper">
          <!-- <el-card class="skills__group">
            <h3 class="skills__group-header"> Key </h3>

          </el-card> -->
          <el-card
            v-for="(skill_group, index) in skillsJson.data"
            :key="index"
            class="skills__group"
          >
            <h3 class="skills__group-header">{{ skill_group.group_name }}</h3>
            <div v-if="skill_group.terms" class="skills__term-wrapper">
              <div v-for="(skill, index) in skill_group.terms" :key="index" class="skills__term">
                <div v-if="'proficiency' in skill" class="skills__proficiency-indicator" v-bind:class="skillsJson.proficiency_key[skill.proficiency]"></div>
                <div class="skills__term-content">
                  {{skill.name}}
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </section>
  </default-template>
</template>

<script>
import DefaultTemplate from "@/templates/Default";
import SkillsJson from "@/json/skills.json";

export default {
  name: "skills-index",
  components: {
    DefaultTemplate
  },
  data: function() {
    return {
      skillsJson: SkillsJson
    };
  }
};

// - {{skillsJson.proficiency_key[skill.proficiency]
</script>
<style lang="sass"></style>
