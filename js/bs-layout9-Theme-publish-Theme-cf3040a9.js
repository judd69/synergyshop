define("@widget/LAYOUT/bs-layout9-Theme-publish-Theme-cf3040a9.js",["exports","~/c/bs-_rollupPluginBabelHelpers","~/c/bs-index3","~/c/bs-themeOverrides","~/c/bs-legacyOverrides","~/c/bs-boldOutline","~/c/bs-defaultSocialIconPack","~/c/bs-overlayTypes","~/c/bs-index","~/c/bs-imageToHeaderTreatments"],(function(e,t,r,o,n,a,s,i,l,d){"use strict";const{colorPackCategories:g,buttons:c}=(global.Core||guac["@wsb/guac-widget-core"]).constants,{LIGHT:u,LIGHT_COLORFUL:p,DARK:m,DARK_ALT:h,DARK_COLORFUL:f,COLORFUL:b,MVP:y}=(global.Core||guac["@wsb/guac-widget-core"]).constants.paintJobs,S={[i.F]:"none",[i.b]:"none",[i.c]:"category-solid",[i.B]:"none",[i.L]:"category-overlay"},T=i.F,x={defaultHeaderTreatment:T,hasLegacy:!0,imageTreatments:S,headerTreatments:d.i(S),mediaSupport:{[i.d]:[T],[i.I]:Object.keys(S),[i.V]:[T]}},I=y;var C={id:"layout9",name:"urban",packs:{color:"#507DE5",font:"righteous"},logo:{font:"alternate"},packCategories:{color:g.ACCENT},headerProperties:{alignmentOption:"center"},headerTreatmentsConfig:x,paintJobs:[u,y,p,b,f,h,m],defaultPaintJob:I,applyDefaultPaintJob:!0,buttons:{primary:{fill:c.fills.SOLID,shape:c.shapes.SQUARE,decoration:c.decorations.NONE,shadow:c.shadows.NONE,color:c.colors.PRIMARY},secondary:{fill:c.fills.SOLID,decoration:c.decorations.NONE,shadow:c.shadows.NONE,color:c.colors.PRIMARY},...l.C}};const A={style:{font:"alternate",color:"highlight",fontSize:"xlarge",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}};class H extends r.D{static get displayName(){return"Theme9"}static getMutatorDefaultProps(e,t){const r=super.getMutatorDefaultProps(e,t),o=l.W[t]||r.enableCircularImage;return"HEADER"===e?{...r,hasLogoAlign:!0,headerTreatmentsConfig:{...r.headerTreatmentsConfig,...C.headerTreatmentsConfig},renderParallaxToggle:!1}:{...r,enableCircularImage:o}}constructor(){super(),t._(this,"sharedInputStyles",{borderColor:"input",borderBottomWidth:"medium",borderRadius:"0",borderStyle:"solid",backgroundColor:"section"}),this.mappedValues={...this.mappedValues,typographyOverrides:{LogoAlpha:{...A},HeadingAlpha:{style:{font:"primary",color:"highContrast",fontSize:"xxlarge",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},HeadingBeta:{style:{font:"primary",color:"highlight",fontSize:"xxlarge",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},HeadingGamma:{...A},NavAlpha:{style:{font:"alternate",color:"highContrast",fontSize:"medium",fontWeight:"bold",letterSpacing:"0.063em",textTransform:"uppercase"},active:{style:{color:"highContrast",borderBottom:"1px solid",borderColor:"primary",":hover":{color:"highlightHover"}}}},SubNavAlpha:{style:{font:"alternate",color:"section",fontSize:"medium",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},NavBeta:{style:{font:"alternate",color:"highContrast",fontSize:"large",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},SubNavBeta:{style:{font:"alternate",color:"section",fontSize:"medium",fontWeight:"normal",letterSpacing:"normal",textTransform:"none"}},ButtonAlpha:{style:{font:"alternate",fontWeight:"bold",letterSpacing:"0.063em",textTransform:"uppercase"}}}}}getSection(e){return"default"===e?"alt":"overlay"===e?"overlay":"default"}Heading(e){const{tag:t}=e,{widgetType:r,widgetPreset:o}=this.base;return super.Heading(this.merge({style:n.g(t,r,o)},e))}HeadingMajor(e){return super.HeadingMajor(this.merge({typography:"HeadingAlpha"},e))}HeroText(e){return super.SubTagline(e)}NavLinkActive(e){return super.NavLinkActive(this.merge({style:{marginBottom:"-1px"}},e))}SectionHeading(e){let{layout:t="full",...r}=e;const n=this.base,a=this.merge({},o.s(n),o.b(n),o.c(n),o.a(n));return super.SectionHeading(this.merge({style:{textAlign:"center","@md":{textAlign:"full"===t?"center":"left"}}},a,r))}Intro(e){return super.Intro(this.merge({alignment:"center"},e))}MediaObjectBackground(e){return super.MediaObjectBackground(this.merge({style:{borderRadius:"0px"}},e))}FooterDetails(e){return super.FooterDetails(this.merge({typography:"BodyAlpha"},e))}PromoBannerText(e){return super.PromoBannerText(this.merge({featured:!0},e))}Icon(e){return super.Icon(this.merge({iconPack:{...a.b,...s.s}},e))}Input(e){let{section:t,...r}=e;return super.Input(this.merge({section:this.getSection(t||this.base.section),style:{paddingHorizontal:"small",paddingTop:"small",paddingBottom:"11px",...this.sharedInputStyles}},r))}InputTextArea(e){return super.InputTextArea(this.merge({rows:5},e))}InputSelect(e){let{section:t,...r}=e;return super.InputSelect(this.merge({section:this.getSection(t||this.base.section),style:{...this.sharedInputStyles,"@xs-only":{fontSize:"medium"}}},r))}InputSelectElement(e){return super.InputSelectElement(this.merge({style:{paddingHorizontal:"small",paddingTop:"small",paddingBottom:"11px","@xs-only":{fontSize:"medium"}}},e))}Table(e){return super.Table(this.merge({style:{borderRadius:0}},e))}ContentCard(e){const t="about1"===this.base.widgetPreset?{style:{alignItems:"center"}}:{};return super.ContentCard(this.merge(t,e))}EmbedVideo(e){let{isVerticalVideo:t,...r}=e;return t?super.EmbedVideo(this.merge({style:{maxHeight:"680px"}},r)):super.EmbedVideo(r)}WrapperInsetEmbedVideo(e){let{isVerticalVideo:t,...r}=e;return t?super.WrapperInsetEmbedVideo(this.merge({style:{maxHeight:"680px"}},r)):super.WrapperInsetEmbedVideo(r)}}t._(H,"config",C),e.default=H,Object.defineProperty(e,"__esModule",{value:!0})})),"undefined"!=typeof window&&(window.global=window);
//# sourceMappingURL=bs-layout9-Theme-publish-Theme-cf3040a9.js.map
