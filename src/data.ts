import { TechItem } from './types';

export const techData: TechItem[] = [
  // 1. 컴퓨터 과학 & 이론
  {
    id: 'data-structure', category: '컴퓨터 과학 & 이론', name: '자료구조 (Data Structure)', shortDesc: '배열, 연결 리스트, 스택, 큐, 트리, 그래프, 해시 테이블',
    definition: '데이터를 효율적으로 접근하고 수정할 수 있도록 저장, 조직, 관리하는 방법입니다.',
    role: '알고리즘의 성능을 결정짓는 핵심적인 기반 기술입니다.',
    guide: '해결하고자 하는 문제의 탐색/삽입/삭제 빈도에 맞춰 최적의 자료구조를 선택하세요.'
  },
  {
    id: 'algorithm', category: '컴퓨터 과학 & 이론', name: '알고리즘 (Algorithm)', shortDesc: '정렬, 탐색, DP, 탐욕법, 백트래킹, 그래프 탐색',
    definition: '주어진 문제를 해결하기 위한 명확하고 효율적인 절차나 방법의 집합입니다.',
    role: '한정된 자원(시간, 메모리) 내에서 빠르고 정확하게 데이터를 처리합니다.',
    guide: '시간 복잡도(Big-O)와 공간 복잡도를 분석하여 성능 병목을 최소화하세요.'
  },
  {
    id: 'computer-architecture', category: '컴퓨터 과학 & 이론', name: '컴퓨터 구조 (Computer Architecture)', shortDesc: 'CPU, 메모리 계층 구조, 논리 회로, 명령어 집합',
    definition: '컴퓨터 시스템의 기능, 구성 요소 및 상호작용 원리를 설계하는 학문입니다.',
    role: '소프트웨어가 하드웨어 위에서 어떻게 실행되는지 이해하고 성능을 최적화할 수 있게 합니다.',
    guide: '캐시 메모리 지역성(Locality)을 고려한 코드 작성으로 실행 속도를 비약적으로 향상시킬 수 있습니다.'
  },
  {
    id: 'discrete-math', category: '컴퓨터 과학 & 이론', name: '이산수학 & 정형기법', shortDesc: '집합론, 명제 논리, 그래프 이론, 오토마타',
    definition: '연속되지 않고 분리된 값들을 다루는 수학으로, 컴퓨터 과학의 수학적 기초입니다.',
    role: '논리적 사고, 암호학, 네트워크 라우팅, 상태 머신 등의 모델링 기반을 제공합니다.',
    guide: '복잡한 비즈니스 로직을 유한 상태 기계(FSM)로 모델링하여 오류를 줄여보세요.'
  },

  // 2. 소프트웨어 공학 & 아키텍처
  {
    id: 'dev-methodology', category: '소프트웨어 공학 & 아키텍처', name: '개발 방법론', shortDesc: '애자일(Agile), 스크럼(Scrum), 칸반(Kanban), TDD, DDD, BDD',
    definition: '소프트웨어를 생산, 유지보수하는 전 과정에 걸쳐 작업 절차와 규칙을 체계화한 방법론입니다.',
    role: '팀의 협업 효율성을 높이고 프로젝트의 위험을 분산하며 품질을 보증합니다.',
    guide: '팀의 규모와 도메인 복잡도에 따라 유연하게 방법론을 취사선택하세요 (예: 복잡한 도메인은 DDD).'
  },
  {
    id: 'sys-architecture', category: '소프트웨어 공학 & 아키텍처', name: '시스템 아키텍처', shortDesc: '모놀리식, MSA, 서버리스, 이벤트 기반, 헥사고날',
    definition: '시스템의 주요 구성 요소, 그들 간의 관계 및 외부 환경과의 상호작용을 정의하는 구조입니다.',
    role: '서비스의 확장성, 유지보수성, 가용성을 결정하는 근본적인 뼈대 역할을 합니다.',
    guide: '스타트업 초기에는 모놀리식으로 빠르게 개발하고, 비즈니스 성장에 따라 MSA로 점진적 전환을 고려하세요.'
  },
  {
    id: 'design-pattern', category: '소프트웨어 공학 & 아키텍처', name: '디자인 패턴 (Design Pattern)', shortDesc: 'GoF 패턴, 동시성 패턴',
    definition: '소프트웨어 설계 시 공통으로 발생하는 문제에 대해 재사용 가능한 해결책을 정리한 것입니다.',
    role: '개발자 간의 원활한 소통을 돕고 코드의 유연성과 재사용성을 극대화합니다.',
    guide: '패턴의 오남용(Over-engineering)을 주의하고, 문제 상황에 정확히 부합할 때만 적용하세요.'
  },
  {
    id: 'quality-testing', category: '소프트웨어 공학 & 아키텍처', name: '품질 및 테스팅', shortDesc: '단위/통합 테스트, 정적 코드 분석, 성능 테스트',
    definition: '소프트웨어의 결함을 찾고 요구사항을 충족하는지 검증하여 품질을 높이는 활동입니다.',
    role: '배포 후 발생할 수 있는 크리티컬한 버그를 사전에 차단하여 서비스 신뢰도를 보장합니다.',
    guide: 'CI 파이프라인에 정적 분석(SonarQube 등)과 자동화 테스트를 연동하여 코드 품질을 강제하세요.'
  },

  // 3. 프로그래밍 & 애플리케이션 개발
  {
    id: 'programming-language', category: '프로그래밍 & 애플리케이션 개발', name: '프로그래밍 언어', shortDesc: 'Java, Python, JS/TS, Go, Rust 등',
    definition: '컴퓨터에게 명령을 내리기 위해 고안된 인공 언어 및 그 생태계입니다.',
    role: '특정 목적과 성능 요구사항에 맞는 비즈니스 로직을 구현하는 도구입니다.',
    guide: '언어의 특성(정적/동적 타입, 가비지 컬렉션 유무)을 파악하여 프로젝트 특성에 맞게 채택하세요.'
  },
  {
    id: 'web-frontend', category: '프로그래밍 & 애플리케이션 개발', name: '웹 프론트엔드', shortDesc: 'HTML/CSS, React, Vue, Angular, Next, Nuxt, 상태 관리',
    definition: '사용자와 직접 상호작용하는 웹 브라우저 화면의 UI/UX를 구축하는 기술입니다.',
    role: '데이터를 시각화하고 사용자의 입력을 받아 백엔드와 통신하는 접점을 제공합니다.',
    guide: '성능 최적화(코드 스플리팅, 렌더링 최적화)와 접근성(a11y) 확보에 신경 쓰세요.'
  },
  {
    id: 'backend-framework', category: '프로그래밍 & 애플리케이션 개발', name: '백엔드 프레임워크', shortDesc: 'Spring Boot, Django, FastAPI, Express, Nest, Gin',
    definition: '서버 측 비즈니스 로직, 데이터베이스 연동, API 통신 등을 편리하게 구현할 수 있는 뼈대입니다.',
    role: '클라이언트의 요청을 처리하고 데이터를 안전하게 저장 및 제공하는 중추 역할을 합니다.',
    guide: '비동기 I/O가 필요한지, 복잡한 트랜잭션 관리가 필요한지에 따라 프레임워크를 선택하세요.'
  },
  {
    id: 'mobile-crossplatform', category: '프로그래밍 & 애플리케이션 개발', name: '모바일 & 크로스플랫폼', shortDesc: 'React Native, Flutter, 안드로이드/iOS SDK',
    definition: '스마트폰 및 태블릿 디바이스에서 동작하는 네이티브 또는 하이브리드 앱을 개발하는 기술입니다.',
    role: '모바일 환경에 최적화된 사용자 경험과 기기 하드웨어 제어 기능을 제공합니다.',
    guide: '타임 투 마켓이 중요하다면 크로스플랫폼을, 극강의 성능이 필요하다면 네이티브를 선택하세요.'
  },

  // 4. 운영체제 & 인프라
  {
    id: 'os', category: '운영체제 & 인프라', name: '운영체제 (OS)', shortDesc: '리눅스 (커널, 셸 스크립트, 파일 시스템), 윈도우 서버, 유닉스, macOS',
    definition: '하드웨어 자원을 관리하고 응용 프로그램이 동작할 수 있는 환경을 제공하는 시스템 소프트웨어입니다.',
    role: '프로세스, 메모리, 파일 시스템, 디바이스를 제어하고 애플리케이션에 API를 제공합니다.',
    guide: '서버 환경에서는 주로 리눅스가 사용되므로, 셸 스크립트와 파일 권한 체계에 익숙해져야 합니다.'
  },
  {
    id: 'network', category: '운영체제 & 인프라', name: '네트워크 (Network)', shortDesc: 'OSI 7계층, TCP/IP, 라우팅, 로드밸런싱, DNS, 방화벽, 서브네팅',
    definition: '컴퓨터 간의 데이터를 주고받기 위한 통신 규약과 물리적/논리적 연결 구조입니다.',
    role: '분산된 시스템 간의 빠르고 안전한 데이터 교환을 보장합니다.',
    guide: '애플리케이션 장애 시 네트워크 계층의 문제인지 판단할 수 있는 트러블슈팅 역량이 중요합니다.'
  },
  {
    id: 'virtualization-container', category: '운영체제 & 인프라', name: '가상화 & 컨테이너', shortDesc: 'Docker, Kubernetes, Podman, VMware, Hyper-V',
    definition: '물리적 자원을 논리적으로 분할(가상화)하거나, 앱을 환경에 구애받지 않고 실행(컨테이너)하는 기술입니다.',
    role: '인프라의 활용도를 높이고 애플리케이션의 배포 일관성 및 이동성을 보장합니다.',
    guide: 'MSA 환경에서는 컨테이너 기반 배포가 표준이므로 Docker 및 K8s의 이해가 필수입니다.'
  },
  {
    id: 'cloud-computing', category: '운영체제 & 인프라', name: '클라우드 컴퓨팅', shortDesc: 'AWS, GCP, Microsoft Azure, OpenStack',
    definition: '인터넷을 통해 IT 자원(컴퓨팅, 스토리지, DB 등)을 온디맨드로 제공하는 서비스 모델입니다.',
    role: '초기 인프라 구축 비용을 줄이고 탄력적인 확장성(Scalability)을 제공합니다.',
    guide: '종속성(Lock-in)을 피하기 위해 멀티 클라우드 전략이나 클라우드 네이티브 기술을 고려하세요.'
  },
  {
    id: 'cicd-iac', category: '운영체제 & 인프라', name: 'CI/CD & IaC', shortDesc: 'Jenkins, GitHub Actions, GitLab CI, Terraform, Ansible, ArgoCD',
    definition: '빌드/배포의 자동화(CI/CD) 및 인프라 구성을 코드로 정의하고 관리(IaC)하는 프랙티스입니다.',
    role: '인프라 변경의 추적성과 재현성을 보장하고 소프트웨어 릴리스 주기를 단축합니다.',
    guide: 'Terraform을 통해 인프라의 상태(State)를 안전하게 중앙 관리하세요.'
  },

  // 5. 데이터베이스 & 데이터 엔지니어링
  {
    id: 'rdbms-db', category: '데이터베이스 & 데이터 엔지니어링', name: '관계형 데이터베이스 (RDBMS)', shortDesc: 'Oracle, MySQL, PostgreSQL, MariaDB, SQL Server',
    definition: '데이터를 엄격한 스키마 기반의 테이블 행과 열로 저장하고 SQL로 조작하는 데이터베이스입니다.',
    role: '금융, 결제 등 데이터의 정합성과 ACID 트랜잭션이 완벽히 보장되어야 하는 시스템의 근간입니다.',
    guide: '서비스 규모가 커질 경우 Read Replica를 활용하여 읽기 부하를 분산시키세요.'
  },
  {
    id: 'nosql-cache', category: '데이터베이스 & 데이터 엔지니어링', name: 'NoSQL & 분산 캐시', shortDesc: 'MongoDB, Redis, Cassandra, DynamoDB, Elasticsearch, Neo4j',
    definition: '유연한 데이터 모델을 가지고 있으며 수평적 확장이 용이한 비관계형 데이터 저장소입니다.',
    role: '대규모 트래픽 처리, 빠른 인메모리 캐싱, 전문 검색 등 RDBMS의 한계를 보완합니다.',
    guide: '목적에 맞는 NoSQL(Document, Key-Value, Graph 등) 선택과 CAP 정리에 대한 이해가 필요합니다.'
  },
  {
    id: 'data-modeling', category: '데이터베이스 & 데이터 엔지니어링', name: '데이터 모델링 & SQL', shortDesc: 'ERD, 정규화/반정규화, 트랜잭션(ACID), SQL 튜닝, 인덱스 최적화',
    definition: '현실 세계의 비즈니스 요구사항을 데이터베이스의 구조로 매핑하고 질의 성능을 최적화하는 과정입니다.',
    role: '데이터의 중복을 제거하고 효율적인 조회를 가능하게 하여 시스템 성능을 결정짓습니다.',
    guide: '실행 계획(Explain Plan)을 분석하여 적절한 복합 인덱스를 설계하고 쿼리를 튜닝하세요.'
  },
  {
    id: 'bigdata-pipeline', category: '데이터베이스 & 데이터 엔지니어링', name: '빅데이터 & 파이프라인', shortDesc: 'Hadoop, Spark, Kafka, Airflow, Snowflake, BigQuery',
    definition: '대량의 데이터를 수집, 저장, 가공하여 분석할 수 있도록 흐름을 제어하는 데이터 인프라입니다.',
    role: '머신러닝 파이프라인 및 BI(Business Intelligence) 대시보드 구성을 위한 기반 데이터를 공급합니다.',
    guide: '배치(Batch) 처리와 스트림(Stream) 처리 아키텍처를 요구사항에 맞게 혼합하여 사용하세요.'
  },

  // 6. 정보 보안
  {
    id: 'cryptography', category: '정보 보안', name: '암호학', shortDesc: '대칭키/비대칭키, 해시 함수, PKI, 전자서명',
    definition: '정보의 기밀성, 무결성, 인증, 부인 방지를 달성하기 위해 수학적 기법을 적용하는 학문입니다.',
    role: '통신 데이터의 도청과 변조를 막고 안전한 인증 체계를 구축합니다.',
    guide: '패스워드는 평문 저장을 절대 피하고, salt를 포함한 강력한 단방향 해시 알고리즘(Bcrypt 등)을 사용하세요.'
  },
  {
    id: 'sys-network-sec', category: '정보 보안', name: '시스템 및 네트워크 보안', shortDesc: 'VPN, IDS/IPS, WAF, DDoS 방어 기법, 포트 스캐닝',
    definition: '서버와 네트워크 인프라를 불법적인 접근과 서비스 거부 공격 등으로부터 방어하는 기술입니다.',
    role: '악의적인 외부 공격을 네트워크 외곽 및 내부에서 탐지하고 차단합니다.',
    guide: 'Zero Trust 모델을 기반으로 모든 내부 통신에 대해서도 검증 및 암호화를 적용하세요.'
  },
  {
    id: 'app-security', category: '정보 보안', name: '애플리케이션 보안', shortDesc: 'OWASP Top 10, SQL 인젝션, XSS, CSRF, 시큐어 코딩',
    definition: '소프트웨어의 설계 및 개발 단계에서 발생할 수 있는 취약점을 식별하고 방어하는 활동입니다.',
    role: '해커가 애플리케이션의 버그를 악용하여 데이터를 탈취하거나 시스템을 장악하는 것을 막습니다.',
    guide: '사용자의 모든 입력값은 신뢰하지 말고, 서버 측에서 철저하게 검증(Validation) 및 이스케이프 처리하세요.'
  },
  {
    id: 'sec-compliance', category: '정보 보안', name: '보안 컴플라이언스', shortDesc: 'ISMS-P, ISO27001, 개인정보보호법, IT 거버넌스',
    definition: '조직이 지켜야 하는 법적, 규제적, 산업 표준적 보안 요구사항과 거버넌스 체계입니다.',
    role: '법적 리스크를 최소화하고 대외적인 서비스 신뢰도를 확보하기 위한 기준을 제공합니다.',
    guide: '개발 초기 단계부터 개인정보 생명주기에 따른 분리 보관 및 파기 정책을 설계에 반영하세요.'
  },

  // 7. 인공지능 & 엣지 컴퓨팅
  {
    id: 'ml-dl', category: '인공지능 & 엣지 컴퓨팅', name: '머신러닝 & 딥러닝', shortDesc: 'TensorFlow, PyTorch, Scikit-learn, 컴퓨터 비전, 자연어 처리(NLP)',
    definition: '컴퓨터가 데이터로부터 패턴을 학습하여 스스로 예측하고 판단할 수 있게 하는 AI 핵심 분야입니다.',
    role: '추천 시스템, 이미지 인식, 언어 번역 등 복잡한 비선형적 문제를 해결합니다.',
    guide: '데이터의 품질이 모델의 성능을 좌우하므로(Garbage In, Garbage Out), 전처리에 많은 리소스를 투자하세요.'
  },
  {
    id: 'gen-ai-mlops', category: '인공지능 & 엣지 컴퓨팅', name: '생성형 AI & MLOps', shortDesc: 'LLM 파인튜닝, RAG, LangChain, MLflow, 프롬프트 엔지니어링',
    definition: '새로운 콘텐츠를 생성하는 대형 언어 모델 활용 및 AI 모델 생명주기를 관리하는 운영 방식입니다.',
    role: '자연어 인터페이스를 제공하며, 지속적인 재학습 및 안정적인 모델 서빙 환경을 구축합니다.',
    guide: 'RAG(검색 증강 생성) 아키텍처를 활용하여 할루시네이션(환각)을 줄이고 최신 도메인 지식을 반영하세요.'
  },
  {
    id: 'embed-hardware', category: '인공지능 & 엣지 컴퓨팅', name: '임베디드 하드웨어 (MCU)', shortDesc: 'ARM Cortex, ESP, STM, 싱글보드 컴퓨터(Raspberry Pi, Jetson)',
    definition: '특정 목적을 수행하기 위해 제한된 자원을 가진 마이크로컨트롤러 및 싱글보드 컴퓨터 장치입니다.',
    role: '물리 세계의 센서 데이터를 수집하고, 엣지(Edge) 단에서 경량화된 연산을 수행합니다.',
    guide: '저전력 설계가 중요하므로, 딥슬립 모드 및 하드웨어 인터럽트를 효율적으로 활용하세요.'
  },
  {
    id: 'embed-os-comm', category: '인공지능 & 엣지 컴퓨팅', name: '임베디드 OS & 통신', shortDesc: 'RTOS(FreeRTOS, Zephyr), Yocto, MQTT, BLE, I2C, SPI, CAN Bus',
    definition: '실시간성을 보장하는 운영체제와 엣지 디바이스 간의 효율적인 통신 프로토콜입니다.',
    role: '제한된 환경에서 태스크의 마감 시간(Deadline)을 보장하고 클라우드와 연결성을 제공합니다.',
    guide: 'IoT 환경에서는 통신 대역폭이 작고 불안정하므로 경량화된 Pub/Sub 프로토콜인 MQTT가 적합합니다.'
  }
];
