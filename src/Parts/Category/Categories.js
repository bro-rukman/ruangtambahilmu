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
    render(){
        const imageData=[
            {
                imageName : <Code/>,
                name : "Programming",
                total : 23,
                course : "Course",
                item : [
                    {
                        id : 1,
                        course : "Fullstack Javascript",
                    },
                    {
                        id : 2,
                        course : "Swift IOS",
                    },
                    {
                        id : 3,
                        course : "Python",
                    }
                ]
            },
            {
                imageName : <Content/>,
                name : "Content Creator",
                total : 183,
                course : "Course"
            },
            {
                imageName : <Designer/>,
                name : "Designer",
                total : 85,
                course : "Course"
            },
            {
                imageName : <Horn/>,
                name : "Digital Marketing",
                total : 43,
                course : "Course"
            },
            {
                imageName : <Engineer/>,
                name : "Software Engineer",
                total : 58,
                course : "Course"
            },
            {
                imageName : <Headphone/>,
                name : "Public Speaking",
                total : 23,
                course : "Course"
            },
        ]
        return (
            <>
            <section className="mb-8 mt-20">
                <div className="w-auto mt-3">
                    <hr/>
                    <h1 className="text-gray-700 text-xl md:text-2xl font-medium md:font-semibold mt-3 mb-1">Kategori</h1>
                    <p className="text-sm text-gray-600 mb-8">Temukan lebih banyak kelas yang serupa dengan minat mu !</p>
                </div>
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {
                        imageData?.length>0? (imageData.map((item,index)=>{
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
