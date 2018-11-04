const loggerMiddleware = store => next  => action => {
    /* 미들웨어 내용 */
    // 현재 스토어 상태값 기록
    console.log('현재 상태', store.getState());
    // 액션 기록
    console.log('액션', action);

    // 액션을 다음 미들웨어 혹은 리듀서로 전달
    const result = next(action);

    // 액션 처리 후의 스토어 상태 기록
    console.log('다음 상태', store.getState());
    console.log('\n'); // 기록 구분

    return result; //sotre.dispatch(ACTION_TYPE)의 결과를 return
}

export default loggerMiddleware