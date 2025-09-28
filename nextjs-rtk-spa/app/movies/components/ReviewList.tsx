'use client';

import {Review} from "@/lib/model/model";
import ReviewUI from "./ReviewUI";
import styles from "./ReviewList.module.css";

interface ReviewListProps {
    reviews: Review[];
}
export default function ReviewList({reviews}: ReviewListProps) {


    return (<div className={styles['reviews-container']}>
        {
            reviews.map(review=><ReviewUI
                key={review._id}
                review={review}/>)
        }
    </div>);
}