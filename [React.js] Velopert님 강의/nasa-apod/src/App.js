import React, { Component } from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';
import moment from 'moment';

import * as api from './lib/api';

class App extends Component {
  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null
  }

  getAPOD = async (date) => {
    if (this.state.loading) return; // 이미 요청중이라면 무시한다.

    this.setState({
      loading: true
    });

    try {
      const response = await api.getAPOD(date);

      // 비구조화 할당 + 새로운 이름
      const {date: retrievedDate, url, media_type: mediaType} = response.data;

      if (!this.state.maxDate) {
        this.setState({
          maxDate: retrievedDate
        })
      }

      this.setState({
        date: retrievedDate,
        mediaType,
        url
      });

      // console.log(response);
    } catch (e) {
      // Error
      console.log(e);
    }

    // 로딩 종료
    this.setState({
      loading: false
    });
  }

  componentDidMount() {
    this.getAPOD();
  }

  handlePrev = () => {
    const { date } = this.state;
    const prevDate = moment(date).subtract(1, 'days').format('YYYY-MM-DD');
    console.log(prevDate);
    this.getAPOD(prevDate);
  }

  handleNext = () => {
    const { date, maxDate } = this.state;
    if(date === maxDate) return;

    const nextDate = moment(date).add(1, 'days').format('YYYY-MM-DD');
    console.log(nextDate);
    this.getAPOD(nextDate);
  }

  render() {
    const {url, mediaType, loading} = this.state;
    const {handlePrev, handleNext} = this;

    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator onPrev={handlePrev} onNext={handleNext} />}
        viewer={(
          // <Viewer
          //   url="https://apod.nasa.gov/apod/image/1810/LightPillars_Brady_960.jpg"
          //   mediaType="image" />
          <Viewer
            url={url}
            mediaType={mediaType}
            loading={loading} />
        )}
      />
    );
  }
}

// 요청이 시작하면 loading 값을 true 로, 끝났다면 false 로 설정합니다.
// 나중에 다음 이미지를 보여주게 될 때, 오늘 이후의 데이터는 존재하지 않기 때문에 maxDate 를 설정해둡니다.
// 비구조화 할당이 되는 과정에서, 새로운 이름으로 값을 지정했습니다. 예를들어, 위의 코드는 response.data 안에 있는 media_type 이란 값을 mediaType 이라고 부르겠다 라는 의미와 동일합니다.
// 상태의 url, mediaType, loading 값을 Viewer 로 전달해줍니다.

export default App;