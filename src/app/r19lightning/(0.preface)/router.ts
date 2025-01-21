export const r0 = [
  {
    path: 'live',
    name: '0、直播录屏地址',
    component: require('./0.live/layout'),
    label: 'live',
    type: 'newer'
  },
  {
    path: 'tip',
    name: '1、注意事项',
    component: require('./0.tip/layout'),
    label: '提醒',
    type: 'danger'
  },
  {
    type: 'tip',
    name: '前言'
  },
  {
    path: 'how',
    name: '2、如何学习才能高效',
    component: require('./1.how/layout')
  }
]