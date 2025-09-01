'use client';
import {Component} from "react";
import {createPortal} from "react-dom";
import Modal from "@/app/components/modal/Modal";

export default function ModalDemo() {
    return (<>
        {
            createPortal( <Modal/>,document.body)
        }
        </>);
}