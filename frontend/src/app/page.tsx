"use client";

import React, { useState } from 'react';
import { Input } from '@/components/input';
import { Textarea } from "@/components/textarea";
import { Modal } from '@/components/modal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Input placeholder="Buscar..." showIcon={true} />
        <Input placeholder="Digite algo..." showIcon={false} />
        <Textarea placeholder="Digite" />
      </Modal>
    </div>
  );
}