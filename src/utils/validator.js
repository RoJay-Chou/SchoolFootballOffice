/**
 * 自定义身份证校验
 * @param {Object} rule 规则
 * @param {String} value 需校验的值
 * @param {Boolean} callback 返回校验结果
 * @returns {void}
 */
const validateIDCard = (rule, value, callback) => {
  const IDCardReg = new RegExp('^[1-9]\\d{5}(18|19|20)\\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$')
  if (value === '' || !value) {
    callback(new Error('请输入身份证号码'))
  } else if (value.length !== 18) {
    callback(new Error('请输入18位身份证号码'))
  } else if (!IDCardReg.test(value)) {
    callback(new Error('请正确输入身份证号码'))
  } else {
    callback()
  }
}

/**
 * 自定义邮政编码校验
 * @param {Object} rule 规则
 * @param {String} value 需校验的值
 * @param {Boolean} callback 返回校验结果
 * @returns {void}
 */
const validatePostcode = (rule, value, callback) => {
  if (typeof value === 'number') {
    try {
      value = JSON.stringify(value)
    } catch (error) {
      // continue regardless of error
    }
  }
  const numReg = new RegExp('^[0-9]*$')
  if (value === '') {
    callback()
  } else if (value === null) {
    callback()
  } else {
    if (value.length !== 6) {
      callback(new Error('请输入6位数字邮政编码'))
    } else if (!numReg.test(value)) {
      callback(new Error('邮政编码只能为数字类型'))
    } else {
      callback()
    }
  }
}

/**
 * 自定义电话号码校验
 * @param {Object} rule 规则
 * @param {String} value 需校验的值
 * @param {Boolean} callback 返回校验结果
 * @returns {void}
 */
const validateMobile = (rule, value, callback) => {
  const numReg = new RegExp('^[0-9]*$')
  const phoneReg = new RegExp('^((13[0-9])|(14[0-9])|(15[0-9])|(16[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\\d{8}$')
  if (value.lengrh === '') {
    callback(new Error('请输入电话号码'))
  } else if (value.length !== 11) {
    callback(new Error('请输入11位数字电话号码'))
  } else if (!numReg.test(value)) {
    callback(new Error('电话号码只能为数字类型'))
  } else if (!phoneReg.test(value)) {
    callback(new Error('请正确输入电话号码'))
  } else {
    callback()
  }
}

/**
 * 自定义单位号码校验
 * @param {Object} rule 规则
 * @param {String} value 需校验的值
 * @param {Boolean} callback 返回校验结果
 * @returns {void}
 */
const validatePhoneNum = (rule, value, callback) => {
  // const numReg = new RegExp('^[0-9]*$')
  if (value === '') {
    callback(new Error('请输入单位号码'))
  } else {
    callback()
  }
}

/**
 * 自定义联系人手机号校验
 * @param {Object} rule 规则
 * @param {String} value 需校验的值
 * @param {Boolean} callback 返回校验结果
 * @returns {void}
 */
const validateContactMobile = (rule, value, callback) => {
  const numReg = new RegExp('^[0-9]*$')
  const phoneReg = new RegExp('^((13[0-9])|(14[0-9])|(15[0-9])|(16[0-9])|(17[0-9])|(18[0-9])|(19[0-9]))\\d{8}$')
  if (value === '') {
    callback(new Error('请输入联系人手机号码'))
  } else if (value.length !== 11) {
    callback(new Error('请输入11位数字联系人手机号码'))
  } else if (!numReg.test(value)) {
    callback(new Error('联系人手机号码只能为数字类型'))
  } else if (!phoneReg.test(value)) {
    callback(new Error('请正确输入联系人手机号码'))
  } else {
    callback()
  }
}

/**
 * 邮箱校验
 * @param {Object} rule 规则
 * @param {String} value 需校验的值
 * @param {Boolean} callback 返回校验结果
 * @returns {void}
 */
const validateMail = (rule, value, callback) => {
  const mailReg = new RegExp('^([a-z0-9A-Z]+[-|_|\\.]?)+[a-z0-9A-Z]@([0-9a-z_\\-]*)(\\.(com|cn|inc|org|cc|edu|de)*){1,2}([a-z]{2})?$')
  if (value === '') {
    callback()
  } else {
    if (!mailReg.test(value)) {
      callback(new Error('请正确输入邮箱'))
    } else {
      callback()
    }
  }
}

/**
 * 联系人邮箱校验
 * @param {Object} rule 规则
 * @param {String} value 需校验的值
 * @param {Boolean} callback 返回校验结果
 * @returns {void}
 */
const validateContactMail = (rule, value, callback) => {
  const mailReg = new RegExp('^([a-z0-9A-Z]+[-|_|\\.]?)+[a-z0-9A-Z]@([0-9a-z_\\-]*)(\\.(com|cn|inc|org|cc|edu|de)*){1,2}([a-z]{2})?$')
  if (value === '') {
    callback()
  } else {
    if (!mailReg.test(value)) {
      callback(new Error('请正确输入联系人邮箱'))
    } else {
      callback()
    }
  }
}

/**
 * 自定义起止日期校验
 * @param {Object} rule 规则
 * @param {String} value 需校验的值
 * @param {Boolean} callback 返回校验结果
 * @returns {void}
 */
const validateStartToEndDate = (rule, value, callback) => {
  if (value === '' || !value) {
    callback(new Error('请选择起止日期'))
  } else {
    const today = new Date()
    // today.getDate()
    const startDate = new Date(value[0])
    if (today.toLocaleDateString() > startDate.toLocaleDateString()) {
      callback(new Error('起始日期不能小于当前日期'))
    } else {
      callback()
    }
  }
}

const validataMsg = {
  name: [
    { required: true, message: '请输入', trigger: 'blur' }
  ],
  identityCardNum: [
    { required: true, validator: validateIDCard, trigger: 'blur' }
  ],
  birthDate: [
    { required: true, message: '请选择日期', trigger: 'change' }
  ],
  gender: [
    { required: true, message: '请选择性别', trigger: 'change' }
  ],
  ethnic: [
    { required: true, message: '请选择民族', trigger: 'change' }
  ],
  // religion: [
  //   {required: true, message: '请选择宗教信仰', trigger: 'change'}
  // ],
  nationality: [
    { required: true, message: '请选择国籍', trigger: 'change' }
  ],
  passportNum: [
    { message: '请输入护照编号', trigger: 'blur' }
  ],
  location: [
    { type: 'array', required: true, message: '请选择家庭所在地区', trigger: 'change' }
  ],
  domainArea: [
    { type: 'array', required: true, message: '请选择所辖地区', trigger: 'change' }
  ],
  detailedAddress: [
    { required: true, message: '请输入家庭详细地址', trigger: 'blur' }
  ],
  postcode: [
    { validator: validatePostcode, trigger: 'blur' }
  ],
  mobile: [
    { required: true, validator: validateMobile, trigger: 'blur' }
  ],
  email: [
    { validator: validateMail, trigger: 'blur' }
  ],
  organization: [
    { required: true, message: '请选择所属单位', trigger: 'change' }
  ],
  organizationFullName: [
    { required: true, message: '请输入单位名称', trigger: 'blur' }
  ],
  trainingCentreName: [
    { required: true, message: '请输入青训中心名称', trigger: 'blur' }
  ],
  onboardDate: [
    { required: true, message: '请输入入职时间', trigger: 'blur' }
  ],
  education: [
    { required: true, message: '请选择文化程度', trigger: 'change' }
  ],
  orgCategory: [
    { required: true, message: '请选择单位类型', trigger: 'change' }
  ],
  phoneNum: [
    { required: true, validator: validatePhoneNum, trigger: 'blur' }
  ],
  contactName: [
    { required: true, message: '请输入联系人姓名', trigger: 'blur' }
  ],
  contactMobile: [
    { required: true, validator: validateContactMobile, trigger: 'blur' }
  ],
  contactMail: [
    { validator: validateContactMail, trigger: 'blur' }
  ],
  certificationLevel: [
    { required: true, message: '请选择教练员等级证书', trigger: 'change' }
  ],
  schoolFBOfficeName: [
    { required: true, message: '请输入校足办名称', trigger: 'blur' }
  ],
  testPlanName: [
    { required: true, message: '请输入测试计划名称', trigger: 'blur' }
  ],
  schoolList: [
    { required: true, message: '请选择学校', trigger: 'change' }
  ],
  templateId: [
    { required: true, message: '请选择模板', trigger: 'change' }
  ],
  startToEndDate: [
    { required: true, validator: validateStartToEndDate, trigger: 'change' }
  ]
}
export default validataMsg
