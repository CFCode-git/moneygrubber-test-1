// d.ts definition 定义 全局声明的文件
type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number // 数据类型 object | number。。。
  createAt?: Date // 类 / 构造函数
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