export type Category = 
  | '컴퓨터 과학 & 이론'
  | '소프트웨어 공학 & 아키텍처'
  | '프로그래밍 & 애플리케이션 개발'
  | '운영체제 & 인프라'
  | '데이터베이스 & 데이터 엔지니어링'
  | '정보 보안'
  | '인공지능 & 엣지 컴퓨팅';

export interface TechItem {
  id: string;
  category: Category;
  name: string;
  shortDesc: string;
  definition: string;
  role: string;
  guide: string;
}
