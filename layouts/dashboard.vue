<template>
  <div>
    <nav-bar></nav-bar>
    <banner-card></banner-card>
    <event-timeline></event-timeline>
    <news-card></news-card>
    <campaign-card></campaign-card>
    <core-team></core-team>
    <spent-money></spent-money>
    <donate-card></donate-card>
    <carousel-card></carousel-card>
    <detail-collection></detail-collection>
    <footer-card></footer-card>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar"
import BannerCard from "@/components/BannerCard"
import EventTimeline from "@/components/EventTimeline"
import NewsCard from "@/components/NewsCard"
import CampaignCard from "@/components/CampaignCard"
import CoreTeam from "@/components/CoreTeam"
import SpentMoney from "@/components/SpentMoney"
import DonateCard from "@/components/DonateCard"
import CarouselCard from "@/components/CarouselCard"
import DetailCollection from "@/components/DetailCollection"
import FooterCard from "@/components/FooterCard"
export default {
  components: {
    NavBar,
    BannerCard,
    EventTimeline,
    NewsCard,
    CampaignCard, 
    CoreTeam,
    SpentMoney,
    DonateCard,
    CarouselCard,
    DetailCollection,
    FooterCard
  }
}
</script>

<style lang="scss" scoped>
</style>