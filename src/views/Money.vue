<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <Types :value.sync="record.type"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';


  const recordList: Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

  type Record = {
    tags: string[]
    notes: string
    type: string
    amount: number // 数据类型 object | number。。。
    createAt?: Date // 类 / 构造函数
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad},
  })
  export default class Money extends Vue {
    tags = ['衣', '食', '住', '行'];
    record: Record = {tags: [], notes: '', type: '-', amount: 0};
    recordList: Record[] = recordList;

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      // 深拷贝一下
      const record2: Record = JSON.parse(JSON.stringify(this.record));
      record2.createAt = new Date();
      this.recordList.push(record2);
    }

    @Watch('recordList')
    onRecordChange() {
      window.localStorage.setItem('recordList', JSON.stringify(this.recordList));

    }
  }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
    }
</style>
