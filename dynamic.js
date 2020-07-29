// https://github.com/webpack/webpack/issues/10722#issuecomment-629619174

const path = require('path');
const fs = require('fs-extra');
const zeroAntdPath = path.resolve(__dirname, './node_modules/zero-element-antd/lib/');
const zeroAntdDepPath = path.resolve(__dirname, './zero-antd-dep');
const zeroAntdMapJSONPath = path.resolve(zeroAntdDepPath, './map.json');
const baseImportPath = '@/../zero-antd-dep/';
const depFilePath = path.resolve(__dirname, './src/zero-antd-dep.js');

fs.access(zeroAntdPath, fs.constants.F_OK, (err) => {
  if (err) {
    throw new Error(`未能找到依赖 zero-element-antd, 请检查目录 ${zeroAntdPath}`);
  } else {
    fs.copy(zeroAntdPath, zeroAntdDepPath, {
      overwrite: true,
    })
      .then(_ => fs.readJSON(zeroAntdMapJSONPath))
      .then(json => fs.writeFile(depFilePath, genFile(json)))
  }
});


function genFile(json) {
  let importList = `
import { set as LayoutSet } from 'zero-element/lib/config/layout';
import { set as CSet } from 'zero-element/lib/config/container';
import { set as LASet } from 'zero-element/lib/config/listAction';
import { set as FITSet } from 'zero-element/lib/config/formItemType';
import { set as AITSet } from 'zero-element/lib/config/actionItemType';
import { set as VTSet } from 'zero-element/lib/config/valueType';

`;
  let content = '';

  Object.keys(json).forEach(key => {
    const depObj = json[key];
    let importContent = '';

    Object.keys(depObj).forEach(name => {
      const importName = name.replace(/\-\w{1}/gi, s => s.toUpperCase().replace('-', ''));
      importList += `import ${key}_${importName} from '${baseImportPath}${depObj[name]}';\n`
      importContent += `'${name}': ${key}_${importName},\n`;
    })

    content += `\n${key}({
${importContent}
});\n`;
  })

  return importList + content;
}