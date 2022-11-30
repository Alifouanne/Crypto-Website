import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import moment from "moment";
import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Loader from './Loader';
const { Text, Title } = Typography;
const { Option } = Select;
const demoImage='http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg'
const News = ({simplified}) => {
  const [newsCategory, setnewsCategory] = useState('Cryptocurrency')
  const {data:cryptoNews}=useGetCryptoNewsQuery({newsCategory,count:simplified?6: 12})
  const { data} = useGetCryptosQuery(100);
  if(!cryptoNews?.value) return <Loader/>

  return (
    <Row gutter={[24,24]}>
      {!simplified && (
        <Col span={24}>
          <Select showSearch className="select-news " placeholder='Select a news category' optionFilterProp="children" onChange={(value)=> setnewsCategory(value )} filterOption={(input,option)=>option.children.toLowerCase().indexOf(input.toLowerCase())>=0}>
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin)=> <Option value={coin.name}>{coin.name}</Option>)}
          </Select>
        </Col>
      )}
      {cryptoNews.value?.map((news,i)=>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.name}</Title>
                <img style={{maxWidth:'100px',maxHeight:'100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news'/>
              </div>
              <p>{news.description > 100 ? `${news.description.substring(0,100)}...`:news.description}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt='news' />
                  <Text className="provider-name"> {news.provider[0]?.name}</Text>
                </div>
                  <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
};

export default News;
