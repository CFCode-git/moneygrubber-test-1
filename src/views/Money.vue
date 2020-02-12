<template>
    <Layout class-prefix="layout">
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        <Types :value.sync="record.type"/>
        <div class="FromItem-wrapper">
            <FromItem field-name="备注"
                      placeholder="在这里输入备注"
                      @update:value="onUpdateNotes"/>
        </div>
        <Tags :data-source.sync="tags" @update:selected="onUpdateTags"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FromItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import {recordListModel} from '@/models/recordListModel';
  import {tagListModel} from '@/models/tagListModel';

  const recordList = recordListModel.fetch();
  const tagList = tagListModel.fetch();

  @Component({
    components: {Tags, FromItem, Types, NumberPad},
  })
  export default class Money extends Vue {
    tags = tagList;
    record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
    recordList: RecordItem[] = recordList;

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    saveRecord() {
      recordListModel.create(this.record)
    }

    @Watch('recordList')
    onRecordChange() {
      recordListModel.save();

    }
  }
</script>

<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column-reverse;
        background: #f5f5f5;
    }
    .FromItem-wrapper{
        padding:12px 0;
    }
</style>
