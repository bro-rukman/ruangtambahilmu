import React,{Component} from 'react'
import Link from 'next/link'
import RenderCard from './RenderCard'
import courses from '../../constant/api/courses' 


import Code from '../../../public/images/code.svg';
import Content from '../../../public/images/file.svg';
import Designer from '../../../public/images/path.svg';
import Horn from '../../../public/images/horn.svg';
import Engineer from '../../../public/images/setting.svg';
import Headphone from '../../../public/images/headphone.svg';
import axios from 'axios';



class Categories extends Component{
    state={
        category : [],
    }
    componentDidMount(){
        axios.get(`http://localhost:3004/categories/`).then((res)=>{
            console.log(res);
            this.setState({
                category: res.data
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        const {category} = this.state;
        const imageData=[
            {
                id : 1,
                imageName : <Code/>
            },
            {
                id : 2,
                imageName : <Content/>
            },
            {
                id : 3,
                imageName : <Designer/>
            },
            {
                id : 4,
                imageName : <Horn/>
            },
            {
                id : 5,
                imageName : <Engineer/>
            },
            {
                id : 6,
                imageName : <Headphone/>
            }
        ]
        return (
            <>
            <section className="mb-8 mt-20">
                <div className="w-auto mt-3">
                    <hr/>
                    <h1 className="text-gray-700 text-xl md:text-2xl font-medium md:font-semibold mt-3 mb-1">Kategori</h1>
                    <p className="text-sm text-gray-600 mb-8">Temukan lebih banyak kelas yang serupa dengan minat mu !</p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
                    {
                        category?.length> 0 ? (category.map((item,index)=>{
                            return <RenderCard item={item} key={index}></RenderCard>
                        })) : (
                            <div className="w-full text-center text-md py-10">
                                    <h2>No items Found</h2>
                            </div>
                        )
                    }
                </div>
            </section>
            </>
        )
    }
}
Categories.getInitialProps = async()=>{
    try {
        const data = await courses.all().then((res)=>{
            console.log('rescategories',res);
            return {data:data};
        })
    } catch (error) {
        return error
    }
}
export default Categories;
