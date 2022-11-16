import React, {useState,useEffect} from 'react';
import axios from "axios";
import styled from "styled-components";
import moment from 'moment';

const Dashboard = () => {

    const [list,setList] = useState([])


    const getCoin = () => {

        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(function (response) {
                // handle success
                console.log(response.data);
                setList(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }

    useEffect(() => {

        getCoin()

    },[])


    const Container = styled.div`
    
        .list-table{
          width: 100%;
        }
            .list-header-container-wrap {
              display: flex;
              align-items: center;
              gap: 0 10px;
              background-color: #ffffff;
              padding: 0 35px;
              height: 50px;
              width: 100%;
              font-size: 13px;
              position: relative;
              border-bottom: 1px solid rgba(0,0,0,.06);
              background: #fafafa;
            }
      

          .list-main-container-wrap {
            display: flex;
            align-items: center;
            gap: 0 10px;
            padding: 0 35px;
            height: 60px;
            width: 100%;
            font-size: 14px;
            border-bottom: 1px solid rgba(0,0,0,.06);
            cursor: pointer;
        
          }

      .list-main-container-wrap:hover{
        background: #fafafa;
      }
 
          .lists-item-container{
            display: flex;
          }

          .list-table-actions {
            width: 30px;
            min-width: 30px;
            position: relative;
          }
      .list-wrapper{
        background-color: #ffffff;
      }

      .flex-1 {
        flex: 1;
      }
      
      .i-flex{
        display: flex;
        align-items: center;
      }
      .coin-text{
        padding-left: 10px;
      }
      
      img{
        width: 100%;
      }
      .coin-img{
        max-width: 40px;
      }
      
      .list-main-container-wrap:nth-child(even){
        background:#0000000f;
      }
      .list-main-container-wrap:nth-child(odd){
        background: #FFF
      }
`




    return(
        <>
           <Container>
                <div className={"container"}>

                    {
                        <div className={"list-header-container-wrap"}>
                            <div className={"flex-1"}>
                            Name
                            </div>
                            <div className={"flex-1"}>
                                Price
                            </div>
                            <div className={"flex-1"}>
                              1h 4h 24 Change
                            </div>
                            <div className={"flex-1"}>
                              24h Volume
                            </div>
                            <div className={"flex-1"}>
                              Market Cap
                            </div>
                        </div>
                    }


                    {
                        list.length > 0 && list.map((item,index) => {



                            return(

                                <div className={"list-main-container-wrap"}>
                                    <div className={"flex-1 text-truncate i-flex"}>
                                        <div className={"coin-img"}>
                                           <img src={item.image}/></div>
                                        <div className={"coin-text"}>
                                            {item.symbol.toUpperCase()}
                                             <span className={"coin-text"}>{item.name}</span>

                                        </div>
                                    </div>

                                    <div className={"flex-1 chip-items text-truncate"}>
                                        {item.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                    </div>
                                    <div className={"flex-1 text-truncate"}>

                                        {moment(item.last_updated).format("DD/MM/YYYY")}
                                    </div>
                                    <div className={"flex-1 chip-items chip-badget text-truncate"}>
                                        {moment(item.atl_date).format('DD/MM/YYYY')}
                                    </div>
                                    <div className={"flex-1 chip-items text-truncate"}>
                                        {moment(item.ath_date).format('DD/MM/YYYY')}
                                    </div>


                                </div>

                            )
                        })
                    }
                </div>
           </Container>
        </>
    )




}

export default Dashboard