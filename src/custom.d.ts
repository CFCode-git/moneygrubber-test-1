// d.ts definition 定义 全局声明的文件

type RootState = {
  recordList: RecordItem[],
  createRecordError: Error | null,
  createTagError: Error | null,
  tagList: Tag[],
  currentTag?: Tag
}


type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number // 数据类型 object | number。。。
  createAt?: string // 类 / 构造函数
}

type Tag = {
  id: string;
  name: string;
}

type TagListModel = {
  data: Tag[],
  fetch: () => Tag[],
  create: (name: string) => 'duplicated' | 'success'  // 联合类型
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated'
  remove: (id: string) => boolean
  save: () => void
}

interface Window {
}