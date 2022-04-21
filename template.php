<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<main>
    <section class="train">
        <div class="container">
            <div class="train__wrapper">
                <div class="train__inner ">
                    <div class="train__title ">
                        <span>Работаем с 2003 года </span>
                        <strong>Поезд</strong>
                    </div>
                    <!-- /.about__title -->
                    <div class="train__text">
                        <? $podzagolovok = CIBlockElement::GetList(
                            array(),
                            array('IBLOCK_ID' => 7, 'ACTIVE' => 'Y'),
                            false,
                            false,
                            array('ID','NAME', 'PREVIEW_PICTURE', 'PROPERTY_PODZAGOLOVOK')
                        );?>
                        <? while($arPodzagolovok = $podzagolovok->GetNext()){?>
                            <?if($arPodzagolovok['NAME'] == 'Поезд'){?>
                                <?=$arPodzagolovok['~PROPERTY_PODZAGOLOVOK_VALUE']['TEXT']?>
                            <?}?>
                        <?}?>
                    </div>
                    <!-- /.about__text -->
                    <div class="train__scroll train__scroll--news">
                        <img src="<?= SITE_TEMPLATE_PATH ?>/img/icon/mouse.svg" alt="мышка">
                        <span>Подробнее о компании</span>
                    </div>
                    <!-- /.about__scroll -->
                </div>
                <!-- /.about__inner -->
                <div class="train__social">
                    <?$contacts = CIBlockElement::GetList(
                        array(),
                        array('IBLOCK_ID' => 4, 'ACTIVE' => 'Y'),
                        false,
                        false,
                        array('ID','NAME','PROPERTY_TELEGRAM','PROPERTY_FACEBOOK','PROPERTY_INST','PROPERTY_TWITTER','PROPERTY_SVYAZI','PROPERTY_INFO_BRON')
                    );
                    if($arContacts = $contacts->GetNext()){?>
                        <a href="https://t.me/poezd_megapolis">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/img/social/tg.svg" alt="telegram">
                        </a>
                        <!-- <a href="<?=$arContacts['PROPERTY_FACEBOOK_VALUE']?>">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/img/social/fc.svg" alt="facebook">
                        </a>
                        <a href="<?=$arContacts['PROPERTY_INST_VALUE']?>">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/img/social/inst.svg" alt="instagram">
                        </a> -->
                        <a href="<?=$arContacts['PROPERTY_TWITTER_VALUE']?>">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/img/social/vk.svg" alt="twitter">
                        </a>
                    <?}?>
                </div>
                <!-- /.metropolis__social -->
                <div class="about__block">
                    <div class="about__block-title  about__block-title--train">
                        Преимущества нашей компании Мегапоезд
                    </div>
                    <!-- /.about__block-title -->
                    <div class="about__block-pagination">
                        <div class="about__block-pagination-inner">
                            <div class="about__swiper-button-prev"></div>
                            <div class="about__swiper-button-next"></div>
                            <div class="about__swiper-pagination"></div>
                        </div>
                        <!-- /.about__block-pagination-inner -->

                    </div>
                    <!-- /.about__block-pagination -->
                    <div class="about__block-inner">
                        <div class="swiper about__swiper">
                            <div class="swiper-wrapper about__swiper-wrapper">
                                <? $i = 0;
                                $preimuschestva = CIBlockElement::GetList(
                                    array(),
                                    array('IBLOCK_ID' => 3, 'ACTIVE' => 'Y'),
                                    false,
                                    false,
                                    array('ID','NAME','PREVIEW_TEXT')
                                );
                                while($arPreimuschestva = $preimuschestva->GetNext()){ $i++?>
                                    <div class="swiper-slide about__slider">
                                        <div class="about__slider-content">
                                            <div class="about__slider-number">
                                                0<?echo $i;?>
                                            </div>
                                            <!-- /.about__slider-number -->
                                            <div class="about__slider-strong">
                                                <?=$arPreimuschestva['NAME']?>
                                            </div>
                                            <!-- /.about__slider-number -->
                                            <div class="about__slider-text">
                                                <?=$arPreimuschestva['PREVIEW_TEXT']?>
                                            </div>
                                            <!-- /.about__slider-number -->
                                        </div>
                                        <!-- /.about__slider-content -->
                                    </div>
                                <?}?>
                            </div>
                            <!-- /.swiper-wrapper about__swiper-wrapper -->
                        </div>
                        <!-- /.swiper about__swiper -->
                    </div>
                    <!-- /.about__block-inner -->
                </div>
            </div>
            <!-- /.about__wrapper -->
        </div>
        <!-- /.container -->
    </section>
    <!-- /.about -->
    <section class="more">
        <div class="container">
            <div class="more__wrapper">
                <div class="more__left">
                    <div class="more__left-block">
                        <div class="more__box-small ">
                            <div class="more__box-small-icon">
                                <img src="<?= SITE_TEMPLATE_PATH ?>/img/user1.svg" alt="подарок">
                            </div>
                            <div class="more__box-small-image">
                                <img src="<?= SITE_TEMPLATE_PATH ?>/img/application/coffeebox.svg" alt="автобус">
                            </div>
                            <!-- /.application__box-small-image -->
                            <div class="more__box-small-inner">
                                <strong>Комфорт</strong>
                                <span>высокого уровня</span>
                            </div>
                        </div>
                        <!-- small -->
                        <div class="more__box-big">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/img/application/city2.png" alt="город">
                        </div>
                    </div>
                    <!-- block -->
                    <div class="more__left-block">
                        <div class="more__box-big ">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/img/application/city1.png" alt="город">
                        </div>
                        <!-- big -->
                        <div class="more__box-small more__box-small--small">
                            <div class="more__box-small-image">
                                <img src="<?= SITE_TEMPLATE_PATH ?>/img/application/busbox.svg" alt="автобус">
                            </div>
                            <!-- /.application__box-small-image -->
                            <div class="more__box-small-inner">
                                <strong>Быстро и безпасно</strong>
                                <span>добираемся до места</span>
                            </div>
                        </div>
                    </div>
                    <!-- block -->
                </div>
                <!-- left -->
                <div class="more__right">
                    <div class="more__right-title">
                        <span>Подробнее </span>
                        <span>о «Мегаполис»</span>

                    </div>
                    <? $poezd = CIBlockElement::GetList(
                        array(),
                        array('IBLOCK_ID' => 13, 'ACTIVE' => 'Y'),
                        false,
                        false,
                        array('ID','NAME','PROPERTY_TEXT_PODROBNEE' ,'PROPERTY_TEXT_CUPE' ,'PROPERTY_DOP_CUPE','PROPERTY_TEXT_SV' ,'PROPERTY_DOP_SV','PROPERTY_TEXT_REST' ,'PROPERTY_DOP_REST')
                    );?>  <? if($arPoezd = $poezd->GetNext()){?>
                        <div class="more__right-text">
                            <?=$arPoezd['~PROPERTY_TEXT_PODROBNEE_VALUE']['TEXT']?>
                        </div>
                    <?}?>
                    <!-- text -->
                </div>
                <!-- right -->
            </div>
            <!-- wrapper -->
           <!-- <video  class="more__video">
                <img src="<?= SITE_TEMPLATE_PATH ?>/img/video.png" alt="Видео">
            </video> -->
        </div>
    </section>
    <?$APPLICATION->IncludeComponent(
        "bitrix:news.list",
        "uroven-obcluz",
        array(
            "ACTIVE_DATE_FORMAT" => "d.m.Y",
            "ADD_SECTIONS_CHAIN" => "Y",
            "AJAX_MODE" => "N",
            "AJAX_OPTION_ADDITIONAL" => "",
            "AJAX_OPTION_HISTORY" => "N",
            "AJAX_OPTION_JUMP" => "N",
            "AJAX_OPTION_STYLE" => "Y",
            "CACHE_FILTER" => "N",
            "CACHE_GROUPS" => "Y",
            "CACHE_TIME" => "36000000",
            "CACHE_TYPE" => "N",
            "CHECK_DATES" => "Y",
            "DETAIL_URL" => "",
            "DISPLAY_BOTTOM_PAGER" => "Y",
            "DISPLAY_DATE" => "Y",
            "DISPLAY_NAME" => "Y",
            "DISPLAY_PICTURE" => "Y",
            "DISPLAY_PREVIEW_TEXT" => "Y",
            "DISPLAY_TOP_PAGER" => "N",
            "FIELD_CODE" => array(
                0 => "ID",
                1 => "CODE",
                2 => "XML_ID",
                3 => "NAME",
                4 => "TAGS",
                5 => "SORT",
                6 => "PREVIEW_TEXT",
                7 => "PREVIEW_PICTURE",
                8 => "DETAIL_TEXT",
                9 => "DETAIL_PICTURE",
                10 => "DATE_ACTIVE_FROM",
                11 => "ACTIVE_FROM",
                12 => "DATE_ACTIVE_TO",
                13 => "ACTIVE_TO",
                14 => "SHOW_COUNTER",
                15 => "SHOW_COUNTER_START",
                16 => "IBLOCK_TYPE_ID",
                17 => "IBLOCK_ID",
                18 => "IBLOCK_CODE",
                19 => "IBLOCK_NAME",
                20 => "IBLOCK_EXTERNAL_ID",
                21 => "DATE_CREATE",
                22 => "CREATED_BY",
                23 => "CREATED_USER_NAME",
                24 => "TIMESTAMP_X",
                25 => "MODIFIED_BY",
                26 => "USER_NAME",
                27 => "",
            ),
            "FILTER_NAME" => "",
            "HIDE_LINK_WHEN_NO_DETAIL" => "N",
            "IBLOCK_ID" => "11",
            "IBLOCK_TYPE" => "Raznoe",
            "INCLUDE_IBLOCK_INTO_CHAIN" => "Y",
            "INCLUDE_SUBSECTIONS" => "Y",
            "MESSAGE_404" => "",
            "NEWS_COUNT" => "6",
            "PAGER_BASE_LINK_ENABLE" => "N",
            "PAGER_DESC_NUMBERING" => "N",
            "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
            "PAGER_SHOW_ALL" => "N",
            "PAGER_SHOW_ALWAYS" => "N",
            "PAGER_TEMPLATE" => "show_more_uroven",
            "PAGER_TITLE" => "Новости",
            "PARENT_SECTION" => "",
            "PARENT_SECTION_CODE" => "",
            "PREVIEW_TRUNCATE_LEN" => "",
            "PROPERTY_CODE" => array(
                0 => "NAME_LVL",
                1 => "DESC",
                2 => "",
            ),
            "SET_BROWSER_TITLE" => "Y",
            "SET_LAST_MODIFIED" => "N",
            "SET_META_DESCRIPTION" => "Y",
            "SET_META_KEYWORDS" => "Y",
            "SET_STATUS_404" => "Y",
            "SET_TITLE" => "N",
            "SHOW_404" => "N",
            "SORT_BY1" => "ID",
            "SORT_BY2" => "SORT",
            "SORT_ORDER1" => "DESC",
            "SORT_ORDER2" => "ASC",
            "STRICT_SECTION_CHECK" => "N",
            "COMPONENT_TEMPLATE" => "uroven-obcluz"
        ),
        false
    );?>

    <!-- /.level -->
    <section class="variants">
        <div class="container">
            <div class="variants__title">
                Вагоны поезда «Мегаполис»
            </div>
            <div class="variants__wrapper">

                <div class="variants__inner">
                    <div class="variants__image">
                        <img src="<?=CFile::GetPath($arResult['PROPERTIES']['PIC_CUPE']['VALUE'])?>" alt="Картинка">
                    </div>
                    <!-- image -->
                    <div class="variants__block">
                        <div class="variants__block-icon">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/img/application/bluechak.svg" alt="подарок">
                        </div>
                        <!-- img -->
                        <div class="variants__block-title">
                            Купейный вагон
                        </div>
                        <!-- title -->
                        <div class="variants__block-text">
                            <?=$arResult['PROPERTIES']['TEXT_CUPE']['~VALUE']['TEXT']?>
                        </div>
                        <!-- text -->
                        <div class="variants__block-wrapper">
                            <? $dop = CIBlockElement::GetList(
                                array(),
                                array('IBLOCK_ID' => 24, 'ACTIVE' => 'Y', 'ID' => $arResult['PROPERTIES']['DOP_CUPE']['VALUE']),
                                false,
                                false,
                                array('ID','NAME','PROPERTY_DOP_TEXT' ,'PROPERTY_ICON')
                            );?>  <? while($arDop  = $dop->GetNext()){?>
                                <div class="variants__block-inner">
                                    <div class="variants__block-inner-image">
                                        <img src="<?= CFile::GetPath($arDop['PROPERTY_ICON_VALUE'])?>">
                                    </div>
                                    <div class="variants__block-inner-text">
                                        <strong><?=$arDop['NAME']?></strong>
                                        <span><?=$arDop['PROPERTY_DOP_TEXT_VALUE']?></span>
                                    </div>
                                </div>
                            <?}?>
                        </div>
                        <!-- wrapper -->
                    </div>
                    <!-- block -->
                    <a href="/cupe" class="link-btn link-btn-before">
                        <span>Подробнее про вагон</span>
                    </a>
                </div>
                <div class="variants__inner variants__inner--mobile">
                    <div class="variants__image">
                        <img src="<?=CFile::GetPath($arResult['PROPERTIES']['PIC_CUPE']['VALUE'])?>" alt="Картинка">
                    </div>
                    <!-- image -->
                    <div class="variants__block">
                        <div class="variants__block-icon">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/img/application/bluechak.svg" alt="подарок">
                        </div>
                        <!-- img -->
                        <div class="variants__block-title">
                            Купейный вагон
                        </div>
                        <!-- title -->
                        <div class="variants__block-text">
                            <?=$arResult['PROPERTIES']['TEXT_CUPE']['~VALUE']['TEXT']?>
                        </div>
                        <!-- text -->
                        <div class="variants__block-wrapper">
                            <? $dop = CIBlockElement::GetList(
                                array(),
                                array('IBLOCK_ID' => 24, 'ACTIVE' => 'Y', 'ID' => $arResult['PROPERTIES']['DOP_CUPE']['VALUE']),
                                false,
                                false,
                                array('ID','NAME','PROPERTY_DOP_TEXT' ,'PROPERTY_ICON')
                            );?>  <? while($arDop  = $dop->GetNext()){?>
                                <div class="variants__block-inner">
                                    <div class="variants__block-inner-image">
                                        <img src="<?= CFile::GetPath($arDop['PROPERTY_ICON_VALUE'])?>">
                                    </div>
                                    <div class="variants__block-inner-text">
                                        <strong><?=$arDop['NAME']?></strong>
                                        <span><?=$arDop['PROPERTY_DOP_TEXT_VALUE']?></span>
                                    </div>
                                </div>
                            <?}?>
                            <!-- inner -->
                        </div>
                        <!-- wrapper -->
                    </div>
                    <!-- block -->
                    <a href="/cupe" class="link-btn link-btn-before">
                        <span>Подробнее про вагон</span>
                    </a>
                </div>
                <div class="variants__inner variants__inner--right">
                    <div class="variants__image variants__image--right">
                        <img src="<?=CFile::GetPath($arResult['PROPERTIES']['PIC_SV']['VALUE'])?>" alt="Картинка">
                    </div>
                    <!-- image -->
                    <div class="variants__block variants__block--right">
                        <div class="variants__block-icon">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/img/application/bluechak.svg" alt="подарок">
                        </div>
                        <!-- img -->
                        <div class="variants__block-title">
                            Вагон СВ
                        </div>
                        <!-- title -->
                        <div class="variants__block-text">
                            <?=$arResult['PROPERTIES']['TEXT_SV']['~VALUE']['TEXT']?>
                        </div>
                        <!-- text -->
                        <div class="variants__block-wrapper">
                            <? $dop = CIBlockElement::GetList(
                                array(),
                                array('IBLOCK_ID' => 24, 'ACTIVE' => 'Y', 'ID' => $arResult['PROPERTIES']['DOP_SV']['VALUE']),
                                false,
                                false,
                                array('ID','NAME','PROPERTY_DOP_TEXT' ,'PROPERTY_ICON')
                            );?>  <? while($arDop  = $dop->GetNext()){?>
                                <div class="variants__block-inner">
                                    <div class="variants__block-inner-image">
                                        <img src="<?= CFile::GetPath($arDop['PROPERTY_ICON_VALUE'])?>">
                                    </div>
                                    <div class="variants__block-inner-text">
                                        <strong><?=$arDop['NAME']?></strong>
                                        <span><?=$arDop['PROPERTY_DOP_TEXT_VALUE']?></span>
                                    </div>
                                </div>
                            <?}?>
                        </div>
                        <!-- wrapper -->
                    </div>
                    <!-- block -->
                    <a href="/vagon-sv" class="link-btn link-btn-before">
                        <span>Подробнее про вагон</span>
                    </a>
                </div>
                <div class="variants__inner">
                    <div class="variants__image">
                        <img src="<?=CFile::GetPath($arResult['PROPERTIES']['PIC_REST']['VALUE'])?>" alt="Картинка">
                    </div>
                    <!-- image -->
                    <div class="variants__block">
                        <div class="variants__block-icon">
                            <img src="<?= SITE_TEMPLATE_PATH ?>/img/application/bluechak.svg" alt="подарок">
                        </div>
                        <!-- img -->
                        <div class="variants__block-title">
                            Вагон-ресторан
                        </div>
                        <!-- title -->
                        <div class="variants__block-text">
                            <?=$arResult['PROPERTIES']['TEXT_REST']['~VALUE']['TEXT']?>
                        </div>
                        <!-- text -->
                        <div class="variants__block-wrapper">
                            <? $dop = CIBlockElement::GetList(
                                array(),
                                array('IBLOCK_ID' => 24, 'ACTIVE' => 'Y', 'ID' => $arResult['PROPERTIES']['DOP_REST']['VALUE']),
                                false,
                                false,
                                array('ID','NAME','PROPERTY_DOP_TEXT' ,'PROPERTY_ICON')
                            );?>  <? while($arDop  = $dop->GetNext()){?>
                                <div class="variants__block-inner">
                                    <div class="variants__block-inner-image">
                                        <img src="<?= CFile::GetPath($arDop['PROPERTY_ICON_VALUE'])?>">
                                    </div>
                                    <div class="variants__block-inner-text">
                                        <strong><?=$arDop['NAME']?></strong>
                                        <span><?=$arDop['PROPERTY_DOP_TEXT_VALUE']?></span>
                                    </div>
                                </div>
                            <?}?>
                        </div>
                        <!-- wrapper -->
                    </div>
                    <!-- block -->
                    <a href="/vagon-restoran" class="link-btn link-btn-before">
                        <span>Подробнее про вагон</span>
                    </a>
                </div>

            </div>
            <!-- wrapper -->
        </div>
    </section>
    <!-- /.variants -->
</main>