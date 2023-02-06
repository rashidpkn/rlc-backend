import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Ads extends Model {
  @Column
  adsTitle: string;

  @Column
  username: string;

  @Column
  email: string;

  @Column({ type: DataType.JSON })
  phone: {
    code: string;
    number: string;
  };

  @Column({ type: DataType.STRING(2000) })
  intro: string;

  @Column
  location: string;

  @Column
  nationality: string;

  @Column
  language: string;

  @Column
  eye: string;

  @Column
  hair: string;

  @Column({ type: DataType.JSON })
  measurement: {
    bust: string;
    waist: string;
    hip: string;
  };

  @Column({ type: DataType.JSON })
  socialMedia: {
    website: '';
  };

  @Column
  height: Number;

  @Column
  weight: Number;

  @Column
  age: Number;

  @Column
  currencyType: string;

  @Column({ type: DataType.JSON })
  outCall: {};

  @Column({ type: DataType.JSON })
  inCall: {};

  @Column({ type: DataType.JSON })
  service: {};

  @Column
  profilePhoto: string;

  @Column({ type: DataType.ARRAY(DataType.STRING) })
  gallery: [];

  @Column({ defaultValue: 1 })
  view: Number;

  @Column({ defaultValue: true })
  visibility: boolean;

  @Column({ defaultValue: false })
  vacation: boolean;

  @Column({ type: DataType.ARRAY(DataType.JSON), defaultValue: [] })
  review: [
    {
      username: string;
      rating: number;
      title: string;
      desc: string;
    },
  ];

  @Column({ type: DataType.ARRAY(DataType.JSON), defaultValue: [] })
  qna: [
    {
      username: string;
      question: string;
      answer: string;
    },
  ];

  @Column({
    type: DataType.ARRAY(DataType.JSON),
    defaultValue: [],
  })
  analytics: [
    {
      date: string;
      view: number;
    },
  ];
}

console.log('Ads Table is OK');
