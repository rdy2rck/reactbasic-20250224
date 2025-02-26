import React, { ReactNode} from 'react';

// Properties (속성)
// - 부모 컴포넌트(호출부)에서 자식 컴포넌트로 데이터를 전달하기 위한 *객체*
// - 부모 컴포넌트에서는 HTML과 동일한 방식으로(속성=값) 전달
// - 자식 컴포넌트에서는 함수의 매개변수로 속성을 받음
// - 전달할 수 있는 데이터는 변수에 담을 수 있는 모든 데이터 형식

// - 컴포넌트가 리렌더링 되는 기준
// - 속성은 부모 -> 자식으로 데이터 전송 가능 / 자식 -> 부모로 데이터 전송은 불가능
interface Props {
  title: string;
  subTitle: string;
  contents: string;
}

function Article({ title, subTitle, contents }: Props) {

  // const { title, subTitle, contents } = props;

  return (
    <article style={{ border: '1px solid gray', marginBottom: '8px'}}>
      <h1>{title}</h1>
      <h3>{subTitle}</h3>
      <p>{contents}</p>
    </article>
  )
}

interface Props2 {
  getTitle: () => string;
  children: ReactNode
}

function Child(props: Props2) {
  
  return (
    <div>
      <h1>{props.getTitle()}</h1>
      {props.children}
    </div>
  )
}

export default function Properties() {

  const article: Props = {
    title: '3N? 이제는 BIG4다',
    subTitle : 'NC소프트 내려가고 네오위즈 복귀',
    contents : '카카오게임즈, 스마일게임즈, 크래프톤, 시프트업 4강 체제 뒤이어'
  }

  const getTitle = () => {
    return '컴포넌트 관리';
  }

  return (
    <div>
      <Article title='NC소프트 주가 1만선 붕괴.... 개고기 식당론이 진짜였나' subTitle='블소2, 호연, 저니 오브 모나크 연달은 실패 영향' contents='반등 가능성 거의 없어....' />
      <Article title={article.title} subTitle={article.subTitle} contents={article.contents} />
      <Article {...article} />
      <Child getTitle={getTitle}>
        <p>익숙한 속성...</p>
      </Child>
    </div>
  )
}