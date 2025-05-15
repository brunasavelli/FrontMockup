"use client";
import styles from './Profile.module.css';
import { Button, Card, Flex, Typography, Skeleton } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
    return (
        <Card hoverable className={styles.card}>
            <Flex justify='space-between'>
                <div className={styles.imageContainer}>
                    <Image src="/images/cat3x4.png" alt="Cat" fill className={styles.image} />
                </div>
                <Flex vertical align="flex-end" justify='space-around'>
                    <div>
                        <Typography.Title level={3}>Gatinho</Typography.Title>
                        <Typography.Title level={5} type='success'>
                            Mockup Front Exam
                        </Typography.Title>
                        <Typography.Paragraph>Projeto desenvolvido usando:</Typography.Paragraph>
                        <Typography.Paragraph level={5} type='secondary'>
                            <ul className={styles.list}>
                                <li>NextJS</li>
                                <li>Axios</li>
                                <li>AntD</li>
                                <li>SessionStorage</li>
                                <li>Toastify</li>
                                <li>CSS Modules</li>
                                <li>Hook</li>
                                <li>Preload</li>
                                <li>PreFetch</li>
                                <li>Link / Next</li>
                                <li>Image / Next</li>
                                <li>NodeJS</li>
                            </ul>
                        </Typography.Paragraph>
                    </div>
                    <Link href="/alunos" prefetch>
                    <Button type='primary'> Acessar minha API GET via Axios</Button>
                    </Link>
                </Flex>
            </Flex>

        </Card>
    )
}
