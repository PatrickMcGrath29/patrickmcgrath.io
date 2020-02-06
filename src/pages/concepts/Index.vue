<template>
  <default-template>
    <section id="concepts">
      <div class="container">
        <div class="concept-section__introduction">
          <h1>Concepts</h1>
        </div>
        <div class="concepts__wrapper">
          <div v-for="(concept_group, index) in conceptGroup.data" :key="index">
            <h4>{{ concept_group.group_name }}</h4>
            <ul>
              <li
                v-for="(concept, index) in concept_group.terms"
                :key="index"
              >{{concept.name}} - {{conceptGroup.proficiency_key[concept.proficiency]}}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </default-template>
</template>

<script>
import DefaultTemplate from "@/templates/Default";

import TermJson from "@/json/terms.json";

export default {
  name: "concepts-index",
  components: {
    DefaultTemplate
  },
  data: function() {
    return {
      conceptGroup: TermJson,
      activeNames: [0]
    };
  },
  computed: {
    conceptGroup: function() {
      return this.conceptGroup;
    }
  }
};
</script>
<style lang="sass"></style>
