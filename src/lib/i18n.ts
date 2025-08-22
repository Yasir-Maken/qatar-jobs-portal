import {
  Briefcase,
  Users,
  Target,
  BarChart3,
  UserCheck,
  Zap,
} from "lucide-react";

// src/lib/i18n.ts

// This is your master dictionary for all languages.
// We're moving it here so every page can access it without repetition.

export const content = {
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

    footerDownload: "حميل التطبيق الآن",
    footerDescription: "ربط الموهبة بالفرصة في قلب الخليج.",
    downloadAppIos: "تحميل للآيفون",
    downloadAppAndroid: "تحميل للأندرويد",
    socialMedia: "تابعنا على",
    footerCopyright: "© 2024 بوابة وظائف قطر. جميع الحقوق محفوظة.",
  },
};

// These are types to help TypeScript understand the structure of our content.
// `Language` will be either 'en' or 'ar'.
export type Language = keyof typeof content;
// `ContentKeys` will be the keys for the specific language content, e.g., 'header', 'signIn'.
export type ContentKeys = keyof (typeof content)["en"];

// This type helps us get the content object for the current language.
export type TranslatedContent = (typeof content)["en"];
