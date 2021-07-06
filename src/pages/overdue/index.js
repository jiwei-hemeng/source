// 逾期列表
import React from "react"
import { Card, SearchBar } from "antd-mobile";
import { AutoSizer, WindowScroller, InfiniteLoader, List } from "react-virtualized";
import styles from "./index.module.scss";
const list = [
  {"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":1,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6232,"order_number":"s20210521160721385818","sh_status":1,"student_name":"曹海军","person_phone":"18030113691","merchant_name":null,"truename":null,"fbId":null,"course_name":"女子健身培训","money":6880.00,"dk_money":3000.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":1036.02,"order_status":"0","deposit_status":"1","set_up_time":"2021-05-21 16:07:21","stages_number":3,"name":"翁明芳","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":8,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"林建喜","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null},{"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":1,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6228,"order_number":"s20210518162724751118","sh_status":1,"student_name":"陈智强","person_phone":"13155909873","merchant_name":"杭州简禾贸易有限公司","truename":"董园园","fbId":null,"course_name":"创业班","money":17460.00,"dk_money":17460.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":1571.96,"order_status":"0","deposit_status":"1","set_up_time":"2021-05-18 16:27:24","stages_number":12,"name":"王仁炼","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":11,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"王仁炼","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null},{"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":1,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6220,"order_number":"s20210513125437135483","sh_status":1,"student_name":"曹海军","person_phone":"18030113691","merchant_name":null,"truename":null,"fbId":null,"course_name":"女子健身培训","money":6880.00,"dk_money":6880.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":2375.93,"order_status":"0","deposit_status":"1","set_up_time":"2021-05-13 12:54:37","stages_number":3,"name":"翁明芳","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":16,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"林建喜","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null},{"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":2,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6206,"order_number":"s20210426125340466533","sh_status":1,"student_name":"李玲","person_phone":"18060928781","merchant_name":"厦门市翔安区晏灵子健身房","truename":"晏春凤","fbId":null,"course_name":"单项无忧卡","money":4980.00,"dk_money":3.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":0.53,"order_status":"0","deposit_status":"1","set_up_time":"2021-04-26 12:53:40","stages_number":6,"name":"李玲","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":3,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"李玲","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null},{"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":2,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6185,"order_number":"s20210414150125172223","sh_status":1,"student_name":"曹海军","person_phone":"18030113691","merchant_name":null,"truename":null,"fbId":null,"course_name":"整容CS","money":10.00,"dk_money":3.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":1.04,"order_status":"0","deposit_status":"1","set_up_time":"2021-04-14 15:01:25","stages_number":3,"name":"翁明芳","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":15,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"林建喜","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null},{"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":1,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6182,"order_number":"s20210303162829636110","sh_status":1,"student_name":"潘晓丽","person_phone":"13685035057","merchant_name":"厦门慕一医疗美容门诊有限公司","truename":"黄倩","fbId":null,"course_name":"星辰美鼻","money":20000.00,"dk_money":20000.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":1866.89,"order_status":"0","deposit_status":"1","set_up_time":"2021-03-03 16:28:29","stages_number":12,"name":"翁明芳","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":87,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"林建喜","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null},{"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":1,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6181,"order_number":"s20210302095825634084","sh_status":1,"student_name":"戴仙花","person_phone":"13950088706","merchant_name":"厦门慕一医疗美容门诊有限公司","truename":"黄倩","fbId":null,"course_name":"整形SOW","money":40000.00,"dk_money":40000.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":3733.77,"order_status":"0","deposit_status":"1","set_up_time":"2021-03-02 09:58:25","stages_number":12,"name":"翁明芳","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":88,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"林建喜","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null},{"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":1,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6180,"order_number":"s20210201155627618262","sh_status":1,"student_name":"邓春花","person_phone":"13860525082","merchant_name":"厦门慕一医疗美容门诊有限公司","truename":"黄倩","fbId":null,"course_name":"整形SOW","money":48800.00,"dk_money":48800.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":4555.21,"order_status":"0","deposit_status":"1","set_up_time":"2021-02-01 15:56:27","stages_number":12,"name":"翁明芳","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":120,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"林建喜","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null},{"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":1,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6179,"order_number":"s20210201101337960540","sh_status":1,"student_name":"黄桂花","person_phone":"13950138535","merchant_name":"厦门慕一医疗美容门诊有限公司","truename":"黄倩","fbId":null,"course_name":"整形SOW","money":48800.00,"dk_money":48800.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":4555.21,"order_status":"0","deposit_status":"1","set_up_time":"2021-02-01 10:13:37","stages_number":12,"name":"翁明芳","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":120,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"林建喜","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null},{"orderId":null,"downOrdersn":null,"loantype":null,"modelname":null,"brandname":null,"specname":null,"color":null,"adminId":null,"agentId":null,"businessId":null,"userId":null,"cuserId":null,"inId":null,"goodsprice":null,"daimoney":null,"fenqiPeriods":null,"downPaymentRate":null,"downPayment":null,"payorderSn":null,"addtime":null,"paytime":null,"status":null,"paymethod":null,"payname":null,"guarantee":null,"lilv":null,"guanlirate":null,"fuwurate":null,"yuegong":null,"contractnum":null,"fqstatus":null,"dijiqi":1,"nexttime":null,"isapply":null,"applytime":null,"isbaddebt":null,"isprepayment":null,"isvalid":null,"delay":null,"repaymethod":null,"cancelpay":null,"dtime":null,"uconfirm":null,"cconfirm":null,"agreetime":null,"itemId":null,"source":null,"istest":null,"surplusTime":null,"supplyImg":null,"isCdel":null,"isUdel":null,"isfree":null,"yqnum":null,"isPlan":null,"planid":null,"isSend":null,"isSign":null,"isChangeAgent":null,"zdStatus":null,"shPassTime":null,"creditCode":null,"isSign2":null,"summary_id":6178,"order_number":"s20210120161737971874","sh_status":1,"student_name":"蒋素欢","person_phone":"15860643789","merchant_name":"厦门慕一医疗美容门诊有限公司","truename":"黄倩","fbId":null,"course_name":"星辰美鼻","money":36800.00,"dk_money":36800.00,"stages_type":1,"mc_deposit_bl":0.0,"mc_deposit":0.0,"mc_deposit_status":0,"yue_gong":6523.26,"order_status":"0","deposit_status":"1","set_up_time":"2021-01-20 16:17:37","stages_number":6,"name":"翁明芳","down_payment":null,"down_payment_money":0.0,"down_payment_status":null,"admin_status":null,"choiceName":null,"mc_deposit_paytime":null,"mc_deposit_ought_time":null,"mc_deposit_money":null,"weiyue_day":null,"weiyue_money":null,"mc_deposit_return_time":null,"bank_name":null,"card_number":null,"username":null,"mc_deposit_caiwu_out_status":null,"caiwu_bei_zhu":null,"mc_deposit_cash_out_status":null,"delay_stages":"0","syMoney":null,"paidAllMoney":null,"overdueAllMoney":null,"faxi":null,"yq_day":129,"fqUrgent":null,"fqRenzheng":null,"image_front":null,"image_fan":null,"image_hand":null,"desc_text":null,"application_thumb":null,"statusDesc":null,"audio_url":null,"iscardValue":null,"agentName":"林建喜","a001":null,"a002":null,"b003":null,"b004":null,"c001":null,"c003":null,"d001":null,"f001":null,"h001":null,"h003":null}]
export default class Overdue extends React.Component {
  state = {
    list: [],
    count: 100, // list 总条数
  }
  // renderList = () => {
  //   return list.map(item => {
  //     return <Card
  //       className={style.Card}
  //       key={item.order_number}
  //       onClick={() => {
  //         console.log("订单编号", item.order_number, this.props)
  //         // this.props.history.push("/overduedetails/" + item.order_number);
  //         this.props.history.push({ pathname: "/overduedetails", state: {id: item.order_number, type: 2}});
  //       }}
  //     >
  //       <Card.Header
  //         title={<span className={style.CardTitle}>{item.order_number}</span>} 
  //         extra={
  //           <span className={item.delay_stages === "1"? style.status: style.end }>分期中</span>
  //         }
  //       />
  //       <Card.Body>
  //         <div className={style.cardItem}>
  //           <span className={style.title}>卖家姓名</span><span>{item.student_name}</span>
  //         </div>
  //         <div className={style.cardItem}>
  //           <span className={style.title}>代理人姓名</span><span>{item.agentName}</span>
  //         </div>
  //         <div className={style.cardItem}>
  //           <span className={style.title}>下单时间</span><span>{item.set_up_time}</span>
  //         </div>
  //       </Card.Body>
  //     </Card>
  //   })
  // }
  componentDidMount() {
    console.log("收索组件传来的值", this.props.location.state)
  }

  // 当前数据是否加载完成
  isRowLoaded= ({ index })=> {
    // !! 表示返回布尔值
    return !!this.state.list[index];
  }
  // 加载更多
  loadMoreRows= ({ startIndex, stopIndex }) => {
    return new Promise(async (resolve, reject) => {
      console.log("数据请求中...", startIndex, stopIndex)
      const newlist = [...this.state.list, ...list]
      const totle = 100;
      this.setState({
        count: totle,
        list: newlist
      })
      return resolve()
    })
  }
  rowRenderer = ({
    key,         // Unique key within array of rows
    index,       // 索引号
    isScrolling, // 当前项是否正在滚动中
    isVisible,   // 当前项在List中是可见的
    style        // 重点属性：一定要给每一个行数添加该样式
  }) => {
    let item = this.state.list[index]
    if(!item){
      return (
        <div key={key} style={style}>正在加载中...</div>
      )
    }
    return (
      <div key={key} style={style}>
        <Card
          className={styles.Card}
          key={item.order_number}
          onClick={() => {
            console.log("订单编号", item.order_number, this.props)
            this.props.history.push({ pathname: "/overduedetails", state: {id: item.order_number, type: 2}});
          }}
        >
          <Card.Header
            title={<span className={styles.CardTitle}>{ item.order_number }</span>} 
            extra={
              <span className={item.delay_stages === "1"? styles.status: styles.end }>分期中</span>
            }
          />
          <Card.Body>
            <div className={styles.cardItem}>
              <span className={styles.title}>卖家姓名</span><span>{item.student_name}</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.title}>代理人姓名</span><span>{item.agentName}</span>
            </div>
            <div className={styles.cardItem}>
              <span className={styles.title}>下单时间</span><span>{item.set_up_time}</span>
            </div>
          </Card.Body>
        </Card>
      </div>
    )
  }
  rowHeight = () => {
    const clientWidth = document.body.clientWidth;
    if(clientWidth < 321){
      return 120
    } else if(clientWidth < 376) {
      return 135
    } else if(clientWidth < 415) {
      return 150
    } else {
      return 200
    }
  }
  render() {
    return (
      <div className={styles.Overdue}>
        <SearchBar
          placeholder="Search"
          onFocus={() => {
            this.props.history.push({
              pathname: "/overdueSearch",
              state: { type: "overdue"}
            })
          }}
        />
        {/* {
          this.renderList()
        } */}
        <InfiniteLoader
          isRowLoaded={this.isRowLoaded} // 当前数据加载完成
          loadMoreRows={this.loadMoreRows} // 加载更多
          rowCount={this.state.count} // 总条数
          minimumBatchSize={10} // 加载更多时每次加载的数据量
        >
          {({ onRowsRendered, registerChild }) => {
            return (
              <WindowScroller>
                {({height, isScrolling, onChildScroll, scrollTop}) => {
                  return (
                    <AutoSizer>
                      {({ width }) => {
                        return (
                          <>
                            <List
                              // InfiniteLoader 的要求
                              onRowsRendered={onRowsRendered}
                              ref={registerChild}
                              // WindowScroller  的要求
                              autoHeight  // 自适应高度
                              isScrolling={isScrolling}  // 组件是否滚动
                              onScroll={ onChildScroll} // 监听让页面一起滚动
                              scrollTop={scrollTop}
                              // list 组件的要求
                              width={ width }
                              height={ height }
                              rowCount={this.state.count}   // 数据的总条数
                              rowHeight={ this.rowHeight }   // 每行的高度
                              rowRenderer={this.rowRenderer} // 每条数据渲染的函数
                            /> 
                            <div className={styles.seat}>&nbsp;</div>
                          </>
                          
                        ) 
                      }}
                    </AutoSizer>
                  )
                }}
              </WindowScroller>
            )
          }}
        </InfiniteLoader>
      </div>
    )
  }
}