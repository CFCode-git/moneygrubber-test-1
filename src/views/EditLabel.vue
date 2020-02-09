<template>
    <layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left" @click="goBack"/>
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="form-wrapper">
            <FromItem :value="tag.name"
                      field-name="标签名"
                      placeholder="请输入标签名"
                      @update:value="update"
            />
        </div>
        <div class="button-wrapper">
            <Button @click="remove">删除标签</Button>
        </div>
    </layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {tagListModel} from '@/models/tagListModel';
  import FromItem from '@/components/Money/FormItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, FromItem}
  })
  export default class EditLabel extends Vue {
    tag?: { id: string, name: string } = undefined;

    goBack() {
      this.$router.back();
    }

    created() {
      const id = this.$route.params.id;
      tagListModel.fetch();
      const tags = tagListModel.data;
      const tag = tags.filter(t => t.id === id)[0];
      if (tag) {
        this.tag = tag;
      } else {
        this.$router.replace('/404');
      }
    }

    update(name: string) {
      if (this.tag) {
        tagListModel.update(this.tag.id, name);
      }
    }

    remove() {
      if (this.tag) {
        if (tagListModel.remove(this.tag.id)) {
          this.$router.back();
        }else{
          window.alert('删除失败')
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .navBar {
        text-align: center;
        font-size: 16px;
        padding: 12px 16px;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;

        > .leftIcon {
            width: 24px;
            height: 24px;
        }

        > .title {
        }

        > .rightIcon {
            width: 24px;
            height: 24px;
        }
    }

    .form-wrapper {
        background: white;
        margin-top: 8px;
        box-shadow: inset 0 -3px 3px -3px $color-shadow;
    }

    .button-wrapper {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
</style>