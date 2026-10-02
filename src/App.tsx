/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { ProductHero } from './components/ProductHero';
import { TrustBadges } from './components/TrustBadges';
import { InteractiveBeforeAfter } from './components/InteractiveBeforeAfter';
import { ToneGuide } from './components/ToneGuide';
import { BotanicalFormula } from './components/BotanicalFormula';
import { CustomerDeliveries } from './components/CustomerDeliveries';
import { CoverageChecker } from './components/CoverageChecker';
import { OrderProcess } from './components/OrderProcess';
import { FaqSection } from './components/FaqSection';
import { StickyBottomBar } from './components/StickyBottomBar';
import { CheckoutModal } from './components/CheckoutModal';
import { ImageModal } from './components/ImageModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { Footer } from './components/Footer';

import { COLOR_VARIANTS, PRODUCT_PACKS } from './data/productData';
import { ColorVariant, ProductPack } from './types';

export default function App() {
  const [selectedColor, setSelectedColor] = useState<ColorVariant>(COLOR_VARIANTS[0]);
  const [selectedPack, setSelectedPack] = useState<ProductPack>(PRODUCT_PACKS[0]); // Pack x2 is index 0 (Más popular)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [imageModalUrl, setImageModalUrl] = useState<string | null>(null);

  // Preselected region / comuna from coverage checker
  const [preselectedRegion, setPreselectedRegion] = useState<string | undefined>(undefined);
  const [preselectedComuna, setPreselectedComuna] = useState<string | undefined>(undefined);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleSelectColorAndScroll = (color: ColorVariant) => {
    setSelectedColor(color);
    const target = document.getElementById('comprar');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreselectComunaAndOrder = (region: string, comuna: string) => {
    setPreselectedRegion(region);
    setPreselectedComuna(comuna);
    setIsCheckoutOpen(true);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola BioCuidado! Tengo una consulta sobre el Shampoo Disaar cubridor de canas (Tono ${selectedColor.shortName}). ¿Me pueden asesorar?`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-slate-800 flex flex-col font-sans">
      {/* Top Banner */}
      <AnnouncementBar />

      {/* Main Header */}
      <Header
        onOpenCheckout={handleOpenCheckout}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      <main className="flex-1">
        {/* Product Hero: Two-column responsive purchase section */}
        <ProductHero
          selectedColor={selectedColor}
          onSelectColor={setSelectedColor}
          selectedPack={selectedPack}
          onSelectPack={setSelectedPack}
          onOpenCheckout={handleOpenCheckout}
          onOpenImageModal={setImageModalUrl}
        />

        {/* 4 Pillars Trust Bar */}
        <TrustBadges />

        {/* Real Before and After Results with Interactive Comparison */}
        <InteractiveBeforeAfter
          onSelectToneAndScroll={handleSelectColorAndScroll}
          onOpenImageModal={setImageModalUrl}
        />

        {/* Visual Color Chart and Tone Guide */}
        <ToneGuide
          selectedColor={selectedColor}
          onSelectColorAndScroll={handleSelectColorAndScroll}
          onOpenImageModal={setImageModalUrl}
        />

        {/* Botanical Ingredients and Step-by-Step Instructions */}
        <BotanicalFormula />

        {/* Customer Deliveries Real Photo Proof */}
        <CustomerDeliveries onOpenImageModal={setImageModalUrl} />

        {/* Interactive Chilean Comuna Delivery Coverage Checker */}
        <CoverageChecker onPreselectComunaAndOrder={handlePreselectComunaAndOrder} />

        {/* How It Works (Order Process: Data, WhatsApp, Receive and Pay) */}
        <OrderProcess onOpenCheckout={handleOpenCheckout} />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection onOpenWhatsApp={handleOpenWhatsApp} />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsApp={handleOpenWhatsApp} />

      {/* Sticky Quick-Buy Bar for Mobile & Desktop */}
      <StickyBottomBar
        selectedColor={selectedColor}
        selectedPack={selectedPack}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* WhatsApp Floating Button */}
      <WhatsAppFloat onOpen={handleOpenWhatsApp} />

      {/* Fullscreen Image Lightbox Modal */}
      <ImageModal
        imageUrl={imageModalUrl}
        onClose={() => setImageModalUrl(null)}
      />

      {/* Chile Cash On Delivery Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        selectedColor={selectedColor}
        onSelectColor={setSelectedColor}
        selectedPack={selectedPack}
        onSelectPack={setSelectedPack}
        preselectedRegion={preselectedRegion}
        preselectedComuna={preselectedComuna}
      />
    </div>
  );
}
