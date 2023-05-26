import { useConfirmModal } from '@/shared/lib';
import { useAppDispatch } from '@/shared/model'
import React from 'react'
import { logoutThunk } from '../../model/logout';
import { Button, Typography } from '@mui/material';

const LogoutButton = () => {
    const dispatch = useAppDispatch();
    const [ConfirmModal, showModal, closeModal] = useConfirmModal();

    const openConfirm = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation()
        e.preventDefault()
        showModal()
    }

    const onConfirm = () => {
        dispatch(logoutThunk())
            .unwrap()
            .finally(() => {
                closeModal()
            })

    }

    return (
        <>
            <Button variant='outlined' color='inherit'  onClick={openConfirm}>Вийти</Button>
            <ConfirmModal title='ви дійсно хочете вийти?' onConfirm={onConfirm}  />
        </>

    )
}

export default LogoutButton