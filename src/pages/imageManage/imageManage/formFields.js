module.exports = [
  {
    field: 'name', label: '名称', type: 'input',
    rules: ['required']
  },
  {
    field: 'url', label: '图片', type: 'upload-image',
    options: {
      API: `/api/fs/uploadx`,
      max: 1,
    },
    rules: ['required']
  },
];
