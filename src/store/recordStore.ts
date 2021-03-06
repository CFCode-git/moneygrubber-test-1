import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[],
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName,
      JSON.stringify(this.recordList));
  },
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createAt = new Date().toISOString();
    // this.recordList?.push(record2);
    this.recordList && this.recordList.push(record2);
    recordStore.saveRecords();
  }
};

recordStore.fetchRecords();

export default recordStore;