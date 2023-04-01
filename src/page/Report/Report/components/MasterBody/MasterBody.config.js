import { Table, Tag, Space } from 'antd';
import {jalaliDate} from "../../../../../utils/functions.util";
import style from './MasterBody.module.scss'


const typeCode = {
  1: "بازگشت وجه",
  2: "کارمزد",
  3:"حساب واسط",
  4:"انتقال وجه",
  5:"حساب واسط انتقال وجه",
  6:"کیف پول اعتباری",
}

export const columns = [

  {
    title: 'ردیف',
    dataIndex: 'row',
  },
  {
    title: 'نام کانال',
    dataIndex: 'channel',
    render : it=> <Tag className={style.username} >{it.name}</Tag>
  },
  {
    title: "IP کانال",
    dataIndex: 'channelIp',
  },
  {
    title: 'نوع درخواست',
    dataIndex: 'requestType',
    render : it=> <Tag className={style.typeRequest} >{it.faName}</Tag>
  }, {
    title: 'IP مشتری',
    dataIndex: 'customerIp',
  },
  {
    title: 'نتیجه',
    dataIndex: 'result',
    render : it=> it.id===45? <Tag className={style.success} >{it.desc}</Tag>: <Tag  className={style.error}>{it.desc}</Tag>
  },
  {
    title: 'زمان ایجاد',
    dataIndex: 'creationTime',
    render:(time)=>jalaliDate(time)
  },


];
