"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useClerk } from "@clerk/nextjs";
// Import the Button component you just installed with the CLI
import { Button } from "@/components/ui/button";
import { QatarJobLogo } from "@/components/qatar-logo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Globe,
  Users,
  Search,
  Target,
  BarChart3,
  UserCheck,
  Zap,
  Shield,
  TrendingUp,
  Download,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

// --- Multi-language content data ---
const content = {
  en: {
    header: "Qatar Jobs Portal",
    signIn: "Sign In",
    signUp: "Sign Up",
    heroTitle: "🇶🇦 Qatar's Premier Job Platform",
    heroSubtitle: "Your Career Journey",
    heroSubtitle2: "Starts Here",
    explorJobs: "Find Jobs",
    postJobs: "Post a Job",
    activeJobs: "Active Jobs",
    allJobSeekers: "Job Seekers",
    allCompanies: "Companies",
    heroDescription:
      "Connect with Qatar's top employers and discover opportunities that match your skills. Join thousands of professionals building their careers in the heart of the Gulf.",
    jobSeekerFeatureBadge: "For Job Seekers",
    jobSeekerFeaturesTitle: "Find Your Perfect Match",
    jobSeekerFeatureDescriptin:
      "Advanced tools and features designed to accelerate your job search and career growth",
    jobSeekerFeatures: [
      {
        icon: Zap,
        title: "AI-Powered Matching",
        description:
          "Our intelligent algorithm matches you with jobs that perfectly align with your skills, experience, and career aspirations.",
      },
      {
        icon: UserCheck,
        title: "Professional Profiles",
        description:
          "Create a comprehensive profile that showcases your expertise and attracts top employers in Qatar's competitive market.",
      },
      {
        icon: Target,
        title: "Application Tracking",
        description:
          "Stay organized with real-time updates on your applications, interview schedules, and feedback from potential employers.",
      },
    ],
    employerFeaturesBadge: "For Employers",
    employerFeaturesTitle: "Build Your Dream Team",
    employerFeatureDescriptin:
      "Comprehensive recruitment tools to help you find, evaluate, and hire the best talent in Qatar",
    employerFeatures: [
      {
        icon: Briefcase,
        title: "Job Posting Management",
        description:
          "Create, edit, and manage job postings with ease. Reach qualified candidates across Qatar with targeted job distribution.",
      },
      {
        icon: BarChart3,
        title: "Candidate Analytics",
        description:
          "Access detailed insights and analytics about candidates, application trends, and hiring performance to optimize your recruitment strategy.",
      },
      {
        icon: Users,
        title: "Team Collaboration",
        description:
          "Collaborate seamlessly with your hiring team, share candidate profiles, and streamline the decision-making process.",
      },
    ],
    ctaSectionTitle: "Ready to Transform your Career?",
    ctaSectionGetStartedBtn: "Get Started Today",
    ctaSectionLearnMoreBtn: "Learn More",
    ctaSectionDescription:
      "Join Qatar's fastest-growing professional network and unlock opportunities that align with your ambitions.",

    footerDownload: "Download App",
    downloadAppIos: "Download for IOS",
    downloadAppAndroid: "Download for Android",
    footerDescription:
      "Connecting talent with opportunity in the heart of the Gulf.",
    socialMedia: "Follow us on",
    footerCopyright: " Qatar Jobs Portal by (QTS). All rights reserved.", // ©
  },
  ar: {
    header: "بوابة وظائف قطر",
    signIn: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    heroTitle: "🇶🇦 ابحث عن وظيفة أحلامك في قطر",
    heroSubtitle: "رحلتك للبحث عن وظيفة",
    heroSubtitle2: "تبدأ من هنا",
    explorJobs: "إيجاد وظيفة",
    postJobs: "إعلان وظيفة",
    activeJobs: "الوظائف المتاحة",
    allJobSeekers: "الباحثين عن وظائف",
    allCompanies: "الشركات",
    heroDescription:
      "نُحدث ثورة في سوق العمل باستخدام أدوات مطابقة ذكي وقوية للباحثين عن عمل وأصحاب العمل على حد سواء.",

    jobSeekerFeatureBadge: "للباحثين عن عمل",
    jobSeekerFeaturesTitle: "احصل على افضل الفرص المناسبة لك",
    jobSeekerFeatureDescriptin:
      "أدوات ومميزات متقدمة مصممة لتسريع حصولك على وظيفة تطوير مسيرتك المهنية",
    jobSeekerFeatures: [
      {
        icon: Zap,
        title: "مطابقة بالذكاء الاصطناعي",
        description: "احصل على أفضل الفرص بناءً على مهاراتك وخبراتك.",
      },
      {
        icon: UserCheck,
        title: "ملفات شخصية احترافية",
        description: "اعرض مهاراتك وخبراتك بملف شخصي حديث واحترافي.",
      },
      {
        icon: Target,
        title: "تتبع الطلبات",
        description:
          "كن منظمًا وتتبع حالة جميع طلبات التوظيف الخاصة بك في مكان واحد.",
      },
    ],
    employerFeaturesBadge: "لأصحاب العمل",
    employerFeaturesTitle: "إبنِ فريق أحلامك",
    employerFeatureDescriptin:
      "أدوات توظيف شاملة لمساعدتك في العثور على أفضل المواهب في قطر وتقييمها وتوظيفها",
    employerFeatures: [
      {
        icon: Briefcase,
        title: "إدارة إعلانات الوظائف",
        description:
          "انشر وادِر وعزز فرص العمل الخاصة بك بسهولة للوصول إلى مجموعة مواهب مؤهلة.",
      },
      {
        icon: BarChart3,
        title: "تحليلات المرشحين",
        description: "احصل على رؤى قيمة حول سلوك المرشحين وأداء طلبات التوظيف.",
      },
      {
        icon: Users,
        title: "التعاون الجماعي",
        description:
          "بسّط عملية التوظيف لديك باستخدام أدوات التعاون والتواصل بين أعضاء الفريق.",
      },
    ],

    ctaSectionTitle: "هل أنت مستعد للتحول في مسارك المهني؟",
    ctaSectionGetStartedBtn: "إبدأ اليوم",
    ctaSectionLearnMoreBtn: "معرفة المزيد",
    ctaSectionDescription:
      "انضم إلى أسرع شبكة مهنية نمواً في قطر واكتشف الفرص التي تتوافق مع طموحاتك.",

    footerDownload: "حمل التطبيق الآن",
    footerDescription: "ربط الموهبة بالفرصة في قلب الخليج.",
    downloadAppIos: "تحميل للآيفون",
    downloadAppAndroid: "تحميل للأندرويد",
    socialMedia: "تابعنا على",
    footerCopyright: "© 2024 بوابة وظائف قطر. جميع الحقوق محفوظة.",
  },
};

export default function Home() {
  const [lang, setLang] = useState("en");

  const t = content[lang as keyof typeof content];
  const isArabic = lang === "ar";

  const toggleLanguage = () => {
    setLang(isArabic ? "en" : "ar");
  };

  const { redirectToSignIn, redirectToSignUp } = useClerk();

  return (
    <div
      className={cn(
        "min-h-screen bg-background",
        isArabic ? "rtl font-cairo" : "font-inter"
      )}
    >
      {/* Fixed Header */}

      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between h-auto sm:h-16">
          {/* Row 1: Logo + Title (left), Language button (right) */}
          <div className="flex w-full items-center justify-between">
            <div className="hidden sm:flex">
              <QatarJobLogo header={t.header} />
            </div>

            {/* On desktop, show all buttons in a row */}
            <div className="hidden sm:flex items-center space-x-3">
              <Link href="/signin">
                {" "}
                <Button variant="ghost" size="sm">
                  {t.signIn}
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm">{t.signUp}</Button>
              </Link>

              <Button variant="outline" size="icon" onClick={toggleLanguage}>
                <Globe className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* On mobile, stack buttons below */}
          <div className="flex flex-col w-full gap-2 sm:hidden">
            {/*  */}
            {/* Row 1: Logo + Title (left), Language button (right) */}
            <div className="flex w-full items-center justify-between">
              <div className="space-x-3 min-w-0">
                <QatarJobLogo header={t.header} />
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={toggleLanguage}
                className="ml-2 flex-shrink-0"
              >
                <Globe className="h-5 w-5" />
              </Button>
            </div>
            {/* Row 2: Sign Up (full width on mobile, inline on desktop) */}
            <div className="grid grid-cols-2 gap-4">
              <Link href="/signin">
                <Button variant="ghost" size="sm" className="w-full">
                  {t.signIn}
                </Button>
              </Link>

              <Link href="/sign-up">
                <Button size="sm" className="w-full">
                  {t.signUp}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  {t.heroTitle}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  {t.heroSubtitle}
                  <span className="text-primary lg:mt-4 block">
                    {t.heroSubtitle2}
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  {t.heroDescription}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Search className="w-5 h-5 mr-2" />
                  {t.explorJobs}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 bg-transparent"
                >
                  <Users className="w-5 h-5 mr-2" />
                  {t.postJobs}
                </Button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-8 text-sm text-muted-foreground">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">10K+</div>
                  <div>{t.activeJobs}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">50K+</div>
                  <div>{t.allJobSeekers}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">2K+</div>
                  <div>{t.allCompanies}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder-nks5q.jpg"
                  alt="Qatar Jobs Portal - Modern Workplace Success"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Seekers Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {t.jobSeekerFeatureBadge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.jobSeekerFeaturesTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.jobSeekerFeatureDescriptin}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.jobSeekerFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employers Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              {t.employerFeaturesBadge}
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.employerFeaturesTitle}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.employerFeatureDescriptin}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.employerFeatures.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.ctaSectionTitle}
            </h2>
            <p className="text-xl opacity-90">{t.ctaSectionDescription}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                {t.ctaSectionGetStartedBtn}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Shield className="w-5 h-5 mr-2" />
                {t.ctaSectionLearnMoreBtn}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-white">{t.header}</span>
              </div>
              <p className="text-slate-400">{t.footerDescription}</p>
            </div>

            {/* Download App */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {t.footerDownload}
              </h3>
              <div className="space-y-3">
                <Link
                  href="#"
                  className="flex items-center space-x-3 hover:text-white transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>{t.downloadAppIos}</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-3 hover:text-white transition-colors"
                >
                  <Download className="w-5 h-5" />
                  <span>{t.downloadAppAndroid}</span>
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                {t.socialMedia}
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © {new Date().getFullYear()} {t.footerCopyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
