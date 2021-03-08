import axios from 'axios';
import React,{Component} from 'react'
import {RootCategories} from '../constant/api/categories'
import API from '../Config/services'
import HeaderLogin from 'src/Parts/HeaderLogin';

 class DetailCategories extends Component{
        state={
            post : [],
        }
     componentDidMount(){
         axios.get(`http://localhost:3004/categories/`).then((res)=>{
             console.log('rescat',res);
             this.setState({
                 post : res.data
             })
         })
         .catch(err=>{
             console.log(err);
         })
     }
     render(){
         const{post} = this.state;
         return(
            <>
            <HeaderLogin/>
            <div className="container-xs container mx-auto">
            <h2 className="mt-8 text-center mb-8">data categories</h2>
            <div>
                {
                    post?.length > 0 ? (
                        post.slice(1,2)?.map((item,index1)=>{
                            return(
                                <div key={index1} data={item}>
                                    <div className="text-lg font-semibold">
                                    {item?.title?? "_"}
                                    </div>
                                    <div>
                                        {
                                            item?.item?.length>0 ? (item?.item?.map((item2,index2)=>{
                                                return(
                                                    <div key={index2} data={item2}>
                                                        <div>{item2?.name??"no name"}</div>
                                                    </div>
                                                )
                                            })) : null
                                        }
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div>no item</div>
                    )
                }
            </div>
            <div>
            </div>
            </div>
            </>
         )
     }
 }
// DetailCategories.getInitialProps=async()=>{
//     try {
//         // const data = await categories.all()
//         // return {data:data}
//         const data = await axios.get(`http://localhost:3004/categories`)
//         .then((res)=>res.json())
//         .then((json)=>json())
//         return data
//     } catch (error) {
//         return error;
//     }
// }
export default DetailCategories;
