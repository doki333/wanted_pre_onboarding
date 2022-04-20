# 원티드 프리온보딩 코스

### 1. Toggle   
   　예시의 토글 버튼은 둘 중에 하나만 선택할 수 있는 특성이 있다는 점을 생각하여 input중에 radio 타입으로 구현하였습니다. 두 개의 input과 label을 작성하고 그 중 첫번째 label에 가상요소 after를 만들고 trasition 값을 주어 배경 슬라이딩 애니메이션을 구현하였습니다. 처음에 ul과 li로 만들던 도중에, 단순 요소 나열이 아니라 check의 유무를 감지하기 위하여 radio 버튼이 좀 더 적절하다고 생각하여 코드를 다시 작성했습니다. 이 후 배경 슬라이딩 애니메이션을 위한 가상요소의 z-index 조절에 어려움을 겪어서 부모요소를 아예 가리거나 아예 뒤로 숨어버려 원하는 대로 구현되지 않았습니다. 하지만 부모 요소에도 z-index를 설정해서 label의 바로 뒤에 오도록 구현할 수 있었습니다.

### 2. Tab   
   　앞서 구현한 Toggle과 비슷한 형태이지만 항목이 더 많다는 점을 감안하여 ul과 li로 시도해보았습니다. li에 min-width를 설정하여 세가지 항목의 길이를 맞추고, 앞서 한 것과 동일하게 첫번째 li에 가상요소 after를 만들었습니다. 또한 tab의 각 항목들을 배열에 넣어서, map 메소드를 통해 index값을 onClick 이벤트에 사용하고자 하였습니다. 각 list의 index를 order이라는 값에 넣어주는 onClick 이벤트를 통해 props, 즉 order의 변화에 따른 슬라이딩 애니메이션을 구현하였습니다. props의 값을 읽어오기 위해 styled-components를 이용하였습니다. 마지막으로 index의 값과 order의 값이 일치하는 list에만 조건부 클래스네임을 넣어 탭의 글자 색상을 변경할 수 있게 하였습니다. 앞서 만든 Toggle.js와 비슷하게 구현하여 어려운 점은 크게 없었습니다.

### 3. Slider   
   　 Input 중에서 text와 range 타입을 이용해 구현해봤습니다. useState Hook을 이용하여 'num'이라는 값을 range와 text input의 value로 설정하여 input의 값을 서로 연결해주었습니다. Text input은 value의 값만을 보여주기 위해 readOnly 속성을 넣어주었습니다. Unordered List 안에 button들을 넣고, value값을 설정하는 onClick 이벤트를 구현했습니다. Text Input에 label을 연결시키고, 위치를 조절하여 text input안에 '%'를 표시하였습니다.   
     　range 위에 있는 원들을 구현하기 위해 각 button들에 가상요소 before를 만들고 위치를 조정해주었습니다. 처음에 원들의 배경색을 바꾸기 위해 color라는 props를 주고자 했습니다. 하지만 color라는 props에 boolean값을 줄수가 없었고, string으로 바꾸니 조건식이 길어졌습니다. (예를 들면 props.color === 'true') 그래서 0이 falsy값이라는 것을 활용하여 현재의 range의 value가 button의 값보다 클 경우 1, 아닐 경우 0 값을 주어 조건식의 길이도 줄이고 조건에 따라 가상요소의 배경색을 바꾸는 이벤트도 구현할 수 있었습니다. Tab.js의 경우와 마찬가지로, props의 값을 읽기 위해 styled-components를 사용하였습니다.   
   　기능들을 구현한 후에 range input의 스타일을 커스텀하는 것이 익숙하지 않아 어려움을 겪었습니다. 하지만 구글링을 통해 range input의 기존 스타일을 appearance: none;을 통해 초기화 하고 -webkit-slider-runnable-track와 -webkit-slider-thumb 속성을 통해 스타일을 줄 수 있다는 것을 알게 되었습니다.
   range바를 조절함에 따라 배경색이 바뀌는 것을 구현하기 위해 linear-gradient를 사용하였습니다. value값을 불러와서 원하는 색상을 0%에서 value의 퍼센트까지 나타나도록 하여 원하는 스타일을 구현할 수 있었습니다.

### 4. Input   
   　 email input과 password input을 사용해 구현하였습니다. 아이콘 사용을 위해 react-icons라는 라이브러리를 설치하였습니다. email 유효성 검사를 위해 정규표현식을 통한 검증 방법을 사용했습니다. 정규 표현식을 직접 작성하는데에는 아직 어려움이 있어서 검색을 통해 정규표현식을 가져왔습니다. onChange 이벤트를 통해 value의 값이 검증을 통과하면 true를, 그렇지 않으면 false값을 설정하게 하였습니다. input창의 focus가 벗어났을 때, onBlur 이벤트를 통해 검증을 통과하지 못한 경우 warning message를 띄울 수 있도록 하였습니다. password 창에서 눈 모양의 아이콘 버튼을 클릭하면 input 타입을 바꿀 수 있도록 onClick 이벤트를 구현하였습니다.

### 5.DropDown   
　값이 변할때마다 글자를 바꾸기 위해서 text타입의 input을 사용했습니다. ul안에 DropDown 버튼을 누르면 검색할 수 있는 창과 클릭할 수 있는 li들이 뜨도록 하였습니다. 검색어 필터링 기능 구현이 조금 어려웠습니다. 처음에는 검색어가 변할때마다 arr를 새로 세팅해서 렌더링하는 방식을 사용했는데, list가 사라졌다가 다시 등장하면서 스크롤 움직임이 커져서 다른 방식을 생각해야했습니다. 그래서 검색 창의 value를 search라는 변수에 담고, filter 메서드를 통해 search의 값을 포함하고 있는 새로운 배열을 얻는 방법을 시도해보았습니다. search값과 배열 항목의 값을 lowerCase함수를 통해 case를 일치시켜서 대문자와 소문자 구분 없이 검색할 수 있게 구현했습니다.
