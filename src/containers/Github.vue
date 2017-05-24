<template lang="jade">
.github
  github-user(:user="user")
  github-repo(:repo="repo")
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import GithubUser from '@/components/GithubUser';
import GithubRepo from '@/components/GithubRepo';

export default {
  name: 'github',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['username', 'user', 'repoId', 'repo', 'users', 'repos']),
  },
  mounted() {
    if (this.username) {
      this.getUserInfo(this.username);
    }
    if (this.repoId) {
      this.getRepoData(this.repoId);
    }
  },
  components: {
    GithubUser, GithubRepo,
  },
  methods: mapActions({
    getUserInfo: 'getUserInfo',
    getRepoData: 'getRepoData',
  }),
};
</script>

<style lang="stylus" scoped>
</style>
