/*
 Navicat Premium Data Transfer

 Source Server         : 本地MySQL 8.X
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost:3306
 Source Schema         : mooc

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 17/05/2019 13:39:33
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for mooc_questions
-- ----------------------------
DROP TABLE IF EXISTS `mooc_questions`;
CREATE TABLE `mooc_questions` (
  `id` varchar(50) NOT NULL COMMENT 'id',
  `title` varchar(255) NOT NULL COMMENT '题目',
  `option_a` varchar(255) DEFAULT NULL COMMENT '选项a',
  `option_b` varchar(255) DEFAULT NULL COMMENT '选项b',
  `option_c` varchar(255) DEFAULT NULL COMMENT '选项c',
  `option_d` varchar(255) DEFAULT NULL COMMENT '选项d',
  `answer` varchar(10) DEFAULT NULL COMMENT '答案选项',
  `answer_string` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '答案描述',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of mooc_questions
-- ----------------------------
BEGIN;
INSERT INTO `mooc_questions` VALUES ('1126793006146433025', '党对教育事业的全面领导,首先是()。（1.0分）', '思想政治领导', '教育方向领导', '政治领导', '组织领导', 'A', '思想政治领导');
INSERT INTO `mooc_questions` VALUES ('1126793006544891905', '5G网络是()移动通信网络。（1.0分）', '第四代', '第六代', '第五代', '第三代', 'C', '第五代');
INSERT INTO `mooc_questions` VALUES ('1126793006565863426', '“一带一路”倡议得到支持的原因不包括()（1.0分）', '不搞“一言堂”', '拉“小圈子”', '追求“高质量”', '“守规则”', 'B', '拉“小圈子”');
INSERT INTO `mooc_questions` VALUES ('1126793006758801410', '要实现中国经济的高质量发展,必须形成新的发展理念,加快建设()型国家。（1.0分）', '先进', '服务', '技能', '创新', 'D', '创新');
INSERT INTO `mooc_questions` VALUES ('1126793006779772929', '()是我国的国之大计、党之大计。（1.0分）', '发展经济', '保护环境', '节约资源', '教育', 'D', '教育');
INSERT INTO `mooc_questions` VALUES ('1126793006800744449', '“一带一路”建设的首次提出是在()年。（1.0分）', '2013', '2014', '2015', '2016', 'A', '2013');
INSERT INTO `mooc_questions` VALUES ('1126793006821715969', '中美战略协作伙伴关系开始于()时期。（1.0分）', '里根', '克林顿', '小布什', '奥巴马', 'B', '克林顿');
INSERT INTO `mooc_questions` VALUES ('1126793006842687489', '台湾“促进转型正义委员”前副主委张天钦曾将“促转会”比为();（1.0分）', '西厂', '东厂', '锦衣卫', '内阁', 'B', '东厂');
INSERT INTO `mooc_questions` VALUES ('1126793006897213442', '中国经济的新特点是()。（1.0分）', '稳中有进', '稳中有变', '稳中向好', '稳中有险', 'B', '稳中有变');
INSERT INTO `mooc_questions` VALUES ('1126793006934962178', '据瑞士信贷银行统计,中国()的总资产已经超过7万亿美元。（1.0分）', '中产阶层', '上层阶级', '工人阶级', '农民阶层', 'A', '中产阶层');
INSERT INTO `mooc_questions` VALUES ('1126793006985293826', '()是关系党和国家事业发展的根本性、全局性、稳定性、长期性问题。（1.0分）', '思想', '政治', '经济', '制度', 'D', '制度');
INSERT INTO `mooc_questions` VALUES ('1126793007006265346', '2018年“九合一”选举罕见地出现“一人救一党,一党救高雄”的现象,其中“一人”指的是()。（1.0分）', '韩国瑜', '蔡英文', '陈其迈', '赖清德', 'A', '韩国瑜');
INSERT INTO `mooc_questions` VALUES ('1126793007023042562', '“改革开放”于上世纪()年代开始实行。（1.0分）', '60', '70', '80', '90', 'B', '70');
INSERT INTO `mooc_questions` VALUES ('1126793007039819778', '1978年关于真理标准问题的大讨论否定了()（1.0分）', '消灭私有制', '“两个凡是”', '推翻资本主义', '两个彻底决裂', 'B', '“两个凡是”');
INSERT INTO `mooc_questions` VALUES ('1126793007064985602', '特朗普是美国()总统?（1.0分）', '第47任', '第44任', '第46任', '第45任', 'D', '第45任');
INSERT INTO `mooc_questions` VALUES ('1126793007085957121', '中国国际进口博览会是在()贸易保护主义愈演愈烈的情况下举办的。（1.0分）', '日本', '印度', '欧盟', '美国', 'D', '美国');
INSERT INTO `mooc_questions` VALUES ('1126793007106928641', '五四运动发生的时间是()。（1.0分）', '1918-05-04', '1920-05-04', '1919-05-04', '1921-05-04', 'C', '1919-05-04');
INSERT INTO `mooc_questions` VALUES ('1126793007127900161', '20世纪70年代,安徽()县首先进行“分田到户”。（1.0分）', '合肥', '凤阳', '安庆', '亳州', 'B', '凤阳');
INSERT INTO `mooc_questions` VALUES ('1126793007148871681', '2018年,中国外交最为突出的亮点是()。（1.0分）', '和平共处', '共同发展', '合作共赢', '互利互惠', 'C', '合作共赢');
INSERT INTO `mooc_questions` VALUES ('1126793007169843202', '拉动我国经济增长的主要引擎是()。（1.0分）', '投资', '消费', '出口', '教育', 'B', '消费');
INSERT INTO `mooc_questions` VALUES ('1126793007182426114', '《习近平新时代中国特色社会主义思想三十讲》(简称《三十讲》),总结了全面深化改革的()条经验。（1.0分）', '九', '八', '七', '六', 'A', '九');
INSERT INTO `mooc_questions` VALUES ('1126793007199203329', '下面哪项不是五四精神的核心内容?()（1.0分）', '爱国', '民主', '科学', '诚信', 'D', '诚信');
INSERT INTO `mooc_questions` VALUES ('1126793007220174849', '三个以上的国家参与的外交活动及其机制被称为()。（1.0分）', '周边外交', '公共外交', '多边外交', '联合外交', 'C', '多边外交');
INSERT INTO `mooc_questions` VALUES ('1126793007236952066', '因文化大革命而中断的中国高考制度于()年恢复。（1.0分）', '1977', '1976', '1975', '1966', 'A', '1977');
INSERT INTO `mooc_questions` VALUES ('1126793007257923585', '检验学校一切工作的根本标准是()。（1.0分）', '升学率', '立德树人的成效', '教师工资', '学生的成绩', 'B', '立德树人的成效');
INSERT INTO `mooc_questions` VALUES ('1126793007278895105', '在中国,()已经成为了第一大产业（1.0分）', '工业', '农业', '建筑业', '服务业', 'D', '服务业');
INSERT INTO `mooc_questions` VALUES ('1126793007291478017', '中央关于农村问题的第一个“一号文件”是()（1.0分）', '《全国农村工作会议纪要》', '《中共中央、国务院关于实行政社分开建立乡政府的通知》', '《关于广东、福建两省会议纪要的批示》', '《中共中央关于经济体制改革的决定》', 'A', '《全国农村工作会议纪要》');
INSERT INTO `mooc_questions` VALUES ('1126793007304060930', '2009年至2018年,美国经济持续增长了()（1.0分）', '112个月', '113个月', '114和月', '111个月', 'B', '113个月');
INSERT INTO `mooc_questions` VALUES ('1126793007316643841', '下面哪个法案是2017年12月22日美国总统特朗普签署的?()（1.0分）', '《减税和就业法案》', '《2019财年国防授权法案》', '《S.2155-经济增长、监管救济和消费者保护法案》', '《反人口贩卖法案》', 'A', '《减税和就业法案》');
INSERT INTO `mooc_questions` VALUES ('1126793007346003969', '第()次科技革命使人类走入了信息化时代。（1.0分）', '一', '二', '三', '四', 'C', '三');
INSERT INTO `mooc_questions` VALUES ('1126793007362781186', '中国经济的新发展理念需要实施()振兴战略。（1.0分）', '乡村', '城镇', '知识', '教育', 'A', '乡村');
INSERT INTO `mooc_questions` VALUES ('1126793007375364097', '2018年G20峰会在哪个国家举行?()（1.0分）', '中国', '阿根廷', '丹麦', '韩国', 'B', '阿根廷');
INSERT INTO `mooc_questions` VALUES ('1126793007387947009', '()是一个国家的根和灵魂,是国家软实力的重要支撑。（1.0分）', '人口', '文化', '领土', '政治', 'B', '文化');
INSERT INTO `mooc_questions` VALUES ('1126793007404724226', '全球经济增长的最大引擎是()。（1.0分）', '美国经济', '欧洲经济', '亚洲经济', '中国经济', 'C', '亚洲经济');
INSERT INTO `mooc_questions` VALUES ('1126793007450861570', '2018年,美国失业率为()。（1.0分）', '0.035', '0.041', '0.026', '0.038', 'D', '0.038');
INSERT INTO `mooc_questions` VALUES ('1126793007471833089', '()不是赖清德检讨2018“九合一”选举败选的原因;（1.0分）', '“我们在往进步价值前进的时候,没有注意到社会大众有没有跟上。”', '“政府施政未能体会人民生活辛苦”', '“政策规划不够周延完善”', '“改革引发重大争议和不满”', 'A', '“我们在往进步价值前进的时候,没有注意到社会大众有没有跟上。”');
INSERT INTO `mooc_questions` VALUES ('1126793007673159681', '亚洲金融危机是指发生于()的一次世界性金融风波。（1.0分）', '1997年', '1996年', '1998年', '2000年', 'A', '1997年');
INSERT INTO `mooc_questions` VALUES ('1126793007782211586', '2015年,《中华人民共和国国家安全法》公布实施,确保()成为新安全法的亮点之一。（1.0分）', '国家安全', '文化安全', '信息安全', '资源安全', 'B', '文化安全');
INSERT INTO `mooc_questions` VALUES ('1126793007954178049', '党政军民学,东西南北中,()是领导一切的。（1.0分）', '民', '军', '党', '法', 'C', '党');
INSERT INTO `mooc_questions` VALUES ('1126793008126144513', '以下哪项是进入21世纪后才确立的基本国策?()（1.0分）', '保护环境', '节约资源', '发展经济', '推行素质教育', 'B', '节约资源');
INSERT INTO `mooc_questions` VALUES ('1126793008423940098', '进行生态建设需要统筹以下哪些方面？（） （2.0分）', '人口分布', '经济布局', '国土利用', '生态环境保护', 'ABCD', '人口分布;经济布局;国土利用;生态环境保护');
INSERT INTO `mooc_questions` VALUES ('1126793008495243265', '我国的环境“欠账”表现在哪些方面?()（2.0分）', '水环境质量不容乐观', '土壤环境质量形势严峻', '环保基础设施薄弱', '生态功能仍呈退化趋势', 'ABCD', '水环境质量不容乐观;土壤环境质量形势严峻;环保基础设施薄弱;生态功能仍呈退化趋势');
INSERT INTO `mooc_questions` VALUES ('1126793008629460994', '我国在扩大开放方面采取的重大举措有()。（2.0分）', '大幅度放宽市场准入', '创造更有吸引力的投资环境', '加强知识产权保护', '主动扩大进口', 'ABCD', '大幅度放宽市场准入;创造更有吸引力的投资环境;加强知识产权保护;主动扩大进口');
INSERT INTO `mooc_questions` VALUES ('1126793008814010369', '改革时期农村的现象包括()（2.0分）', '通信基本靠吼', '交通基本靠走', '照明基本靠油', '治安基本靠狗', 'ABCD', '通信基本靠吼;交通基本靠走;照明基本靠油;治安基本靠狗');
INSERT INTO `mooc_questions` VALUES ('1126793009023725570', '中华文化走出去需要注意的问题包括()。（2.0分）', '构建清晰的文化外交战略目标', '中华传统文化需要传承和创新', '重视文化交流中的文化安全问题', '多途径加快中华文化传播力度', 'ABCD', '构建清晰的文化外交战略目标;中华传统文化需要传承和创新;重视文化交流中的文化安全问题;多途径加快中华文化传播力度');
INSERT INTO `mooc_questions` VALUES ('1126793009061474305', '中国经济发展的战略目标就是要在()的基础上,建设现代化经济体系。（2.0分）', '质量变革', '成本变革', '效率变革', '动力变革', 'ACD', '质量变革;效率变革;动力变革');
INSERT INTO `mooc_questions` VALUES ('1126793009132777473', '关于“党”与“民”,正确的启示是()（2.0分）', '党来自人民', '党扎根人民', '党造福人民', '为人民服务是党的根本宗旨', 'ABCD', '党来自人民;党扎根人民;党造福人民;为人民服务是党的根本宗旨');
INSERT INTO `mooc_questions` VALUES ('1126793009157943297', '下列属于中国历史上著名的变法的是()。（2.0分）', '张居正改革', '戊戌变法', '王莽改制', '明治维新', 'ABC', '张居正改革;戊戌变法;王莽改制');
INSERT INTO `mooc_questions` VALUES ('1126793009174720513', '下列哪些是破坏我国生态环境的主要污染物?（2.0分）', '化学需氧量', '氧气', '二氧化硫', '氮氧化物', 'ACD', '化学需氧量;二氧化硫;氮氧化物');
INSERT INTO `mooc_questions` VALUES ('1126793009199886338', '“一国两制”方针的推行地区包括()（2.0分）', '香港', '澳门', '台湾', '西藏', 'ABC', '香港;澳门;台湾');
INSERT INTO `mooc_questions` VALUES ('1126793009220857857', '习近平提出的“四个引路人”是?()（2.0分）', '锤炼品格的引路人', '学习知识的引路人', '循规蹈矩的引路人', '奉献祖国的引路人', 'ABD', '锤炼品格的引路人;学习知识的引路人;奉献祖国的引路人');
INSERT INTO `mooc_questions` VALUES ('1126793009241829377', '蔡英文“执政”期间的两岸政策有()。（2.0分）', '“柔性台独”', '“新南向政策”', '“去中国化”', '“亲中抗美”', 'ABC', '“柔性台独”;“新南向政策”;“去中国化”');
INSERT INTO `mooc_questions` VALUES ('1126793009258606593', '下面哪些是我国在建立全国统一的空间规划体系时,需要完成的控制线划定工作?()（2.0分）', '连片森林建设', '生态保护红线', '永久基本农田', '城镇开发边界', 'BCD', '生态保护红线;永久基本农田;城镇开发边界');
INSERT INTO `mooc_questions` VALUES ('1126793009279578113', '下列哪些选项是习近平外交思想的内容?()（2.0分）', '倡导正确的义利观', '提出“亲、诚、惠、容”理念', '推翻二战后的国际秩序', '构建人类命运共同体', 'ABD', '倡导正确的义利观;提出“亲、诚、惠、容”理念;构建人类命运共同体');
INSERT INTO `mooc_questions` VALUES ('1126793009535430657', '以下哪些国家属于亚太地区的新兴经济体?()（2.0分）', '中国', '乌兹别克斯坦', '韩国', '新加坡', 'ACD', '中国;韩国;新加坡');
INSERT INTO `mooc_questions` VALUES ('1126793009866780674', '政治评论家基辛格认为,中美关系再也回不到特朗普执政之前。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793010168770561', '改革开放40年来,我国建成了世界第三大的社会保障体系。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793010202324994', '全面深化改革是解决中国现实问题的根本途径。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793010227490818', '2018年,世界经济增长的主要贡献者依然是发展中国家和新兴市场。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793010298793985', '我国是一个大国,决不能在根本性问题上出现颠覆性错误。因此,绝不能进行“摸着石头过河”的尝试。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793010332348417', '计划经济对中国的经济发展全无促进。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793010386874370', '青年成长成才的核心灵魂是要勇于创新创造。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793010479149058', '农村改革的一大突破是乡镇企业的异军突起。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793010894385154', '新时代生态文明建设的根本遵循是习近平生态文明思想。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793011016019970', '习近平表示,要善于运用“底线思维”的方法,凡事从好处准备,努力争取最好的结果。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793011305426945', '2018年,美国制造业PMI仍处于直线上升趋势。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793011414478850', '从我国污染分布看,北方土壤污染明显重于南方。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793011523530754', '台湾“九合一”选举是全台湾各县市九项地方公职人员选举合并在三天内进行。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793011573862401', '实现中华民族伟大复兴,归根结底要靠人才、靠教育（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793011703885825', '世界上面积最大的人工林是中国的塞罕坝人工林。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793011808743425', '青年成长成才的立身之本是要锤炼高尚品格。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793011901018113', '1977年,自发进城的农民被称为“盲流”。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793011984904193', '1985年—2013年间,我国经济增长对资源能源的依赖并不高,且资源能源消耗不大。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793012106539010', '教育优先发展战略的根本任务是立德树人。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793012135899138', '文化认同是一个国家和民族得以存在和发展的基础,是一个民族富有凝聚力的保障。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793012223979521', '2018年2月,联合国将“构建人类命运共同体”的表述,写入联合国决议中。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793012291088386', '我国个人所得税的征税额度在2018年10月1日由3500元上升到4000元。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793012559523841', '如今的“金砖国家”是经济概念,而非政治概念（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793012832153602', '蔡英文明确承认“九二共识”。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793013100589057', '社会主义的本质要求和根本任务是推进党的伟大自我革命。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793013125754881', '文化不具有民族性。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126793013410967553', '乡镇企业的迅速崛起,客观上促进了人民公社的解体。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793013570351105', '根据默文·金恩的评价,北京中关村、上海浦东、深圳创新中心的科创水平处于世界前列水平。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793013675208705', '发展教育的价值追求是要坚持以人民为中心。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126793014069473282', '根据台湾政治人物柯文哲的评价,可以看出,台湾选举较为干净公正。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126799226584457217', '()正式确立了社会主义市场经济的改革方向和基本内容。（1.0分）', '中共十二大', '中共十三大', '中共十四大', '中共十五大', 'C', '中共十四大');
INSERT INTO `mooc_questions` VALUES ('1126799227079385089', '中国经济发展的主要趋势是()。（1.0分）', '高出口发展', '高进口发展', '高质量发展', '高产量发展', 'C', '高质量发展');
INSERT INTO `mooc_questions` VALUES ('1126799227297488898', '首届中国国际进口博览会在()举行。（1.0分）', '北京', '上海', '深圳', '成都', 'B', '上海');
INSERT INTO `mooc_questions` VALUES ('1126799227943411713', '文化创新和创意产业的发展有哪些作用?()（1.0分）', '解决劳动力就业', '促进社会经济增长', '提升国家文化影响力', '以上都是', 'D', '以上都是');
INSERT INTO `mooc_questions` VALUES ('1126799228375425026', '“一五”期间(1953-1957年),中国处于()时期。（1.0分）', '混合经济', '计划经济体制', '市场经济', '有计划的商品经济', 'A', '混合经济');
INSERT INTO `mooc_questions` VALUES ('1126799228530614273', '下面哪些是推动“一带一路”建设的原则?()（2.0分）', '共商', '共和', '共建', '共享', 'ACD', '共商;共建;共享');
INSERT INTO `mooc_questions` VALUES ('1126799228765495298', '1962年,我国在决定建立塞罕坝机械林场时,确立了哪些建场任务?（2.0分）', '建成大片用材林基地,生产中、小径级用材', '改变当地用材面貌,保持水土,为改变京津地带风沙危害创造条件', '研究积累高寒地区造林和育林的经验', '研究积累大型国营机械化林场经营管理的经验', 'ABCD', '建成大片用材林基地,生产中、小径级用材;改变当地用材面貌,保持水土,为改变京津地带风沙危害创造条件;研究积累高寒地区造林和育林的经验;研究积累大型国营机械化林场经营管理的经验');
INSERT INTO `mooc_questions` VALUES ('1126799228954238978', '我国资源环境面临着哪些严峻的挑战?()（2.0分）', '资源能源消耗总量大', '污染减排压力很大', '环境欠账仍然较多', '环境风险较高', 'ABCD', '资源能源消耗总量大;污染减排压力很大;环境欠账仍然较多;环境风险较高');
INSERT INTO `mooc_questions` VALUES ('1126799229734379521', '2018年中央经济会议提出了哪些“稳定”?()（2.0分）', '稳就业', '稳外贸', '稳投资', '稳预期', 'ABCD', '稳就业;稳外贸;稳投资;稳预期');
INSERT INTO `mooc_questions` VALUES ('1126799229797294082', '下面关于恩格尔系数的说法正确的有哪些?()（2.0分）', '大于60%为贫穷', '50%—60%为温饱', '30%以下为富足', '40%—50%为小康', 'ABCD', '大于60%为贫穷;50%—60%为温饱;30%以下为富足;40%—50%为小康');
INSERT INTO `mooc_questions` VALUES ('1126799229839237121', '中共十八届三中全会明确表明,改革涵盖()（2.0分）', '政治', '经济', '文化', '生态文明', 'ABCD', '政治;经济;文化;生态文明');
INSERT INTO `mooc_questions` VALUES ('1126799229885374466', '根据党的十九大报告重点,新型国际关系需推动()的建设。（2.0分）', '相互尊重', '公平正义', '合作共赢', '军事结盟', 'ABC', '相互尊重;公平正义;合作共赢');
INSERT INTO `mooc_questions` VALUES ('1126799229923123202', '教师之所以重要,是因为教师工作是()的工作。（2.0分）', '塑造灵魂', '塑造生命', '塑造性格', '塑造人', 'ABD', '塑造灵魂;塑造生命;塑造人');
INSERT INTO `mooc_questions` VALUES ('1126799229956677633', '2018年“九合一”选举,台湾舆论不看好韩国瑜参选的原因包括()。（2.0分）', '韩国瑜空降到高雄,无选举资金', '高雄是民进党的铁票区', '韩国瑜不善运用移动互联网', '陈其迈是高雄市“代理市长”', 'ABD', '韩国瑜空降到高雄,无选举资金;高雄是民进党的铁票区;陈其迈是高雄市“代理市长”');
INSERT INTO `mooc_questions` VALUES ('1126799230027980802', '以下哪些国家属于“金砖国家”?()（2.0分）', '俄罗斯', '中国', '巴西', '南非', 'ABCD', '俄罗斯;中国;巴西;南非');
INSERT INTO `mooc_questions` VALUES ('1126799230439022593', '蔡英文和赖清德均将2018“九合一”选举的败选归咎于民众。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799230883618818', '亚洲经济的增长主要依靠出口。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126799231030419457', '党的十八大报告指出,要扎实推进公共和民间外交。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126799231420489730', '在世界经济发展中处于核心位置的国家是中国和美国。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799231508570113', '对自然资源的粗放利用是导致生态环境破坏的原因之一。（） （1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799231558901761', '“上合组织”的首次扩员,新增了俄罗斯和印度。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126799231600844802', '合作共赢适用于国际关系的各个领域。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799231680536577', '中国的综合国力还没有具备文化走出去的能力。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126799231948972034', '中国社会现在的主要矛盾是人民日益增长的美好生活需要和不平衡不充分的发展之间的矛盾。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799232104161281', '当代国际秩序的变革应当以一种渐进的方式进行,而不是直接打碎旧秩序,建立新秩序。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799232179658753', '高等教育水平是一个国家发展水平和发展潜力的重要标志。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799232301293569', '金山银山和绿水青山的关系,归根到底就是正确处理经济发展和生态环境保护的关系。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799232439705602', '“六项原则”是习近平生态文明事项的核心内涵。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799232657809410', '对两岸关系未来走势进行分析,民进党预计会放弃“台独”理念。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126799232758472705', '改革开放是从城市拉开序幕的。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126799233102405634', '引领全球治理体系改革要坚持以公平正义为理念。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799233194680321', '菲利普斯曲线是指在充分就业的情况下,通货膨胀率会上升（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799233328898049', '2018年全球创新指数报告中,中国排名第17,首次跻身全球创新指数20强。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799941390372865', '2017年,美国商务部应总统要求,对进口的()产品启动232调查。（1.0分）', '石油', '汽车', '钢铁', '大豆', 'C', '钢铁');
INSERT INTO `mooc_questions` VALUES ('1126799941742694402', '马克思主义提出的“消灭三大差别”中的差别包括()（2.0分）', '贫富差别', '工农差别', '城乡差别', '脑力劳动和体力劳动的差别', 'BCD', '工农差别;城乡差别;脑力劳动和体力劳动的差别');
INSERT INTO `mooc_questions` VALUES ('1126799941834969090', '目前我国面临的主要就业问题有哪些?()（2.0分）', '大学生就业形式严峻', '农民工就业困难', '退伍军人就业问题', '下岗工人再就业问题', 'ABC', '大学生就业形式严峻;农民工就业困难;退伍军人就业问题');
INSERT INTO `mooc_questions` VALUES ('1126799941981769730', '习近平“两岸一家亲”思想的政治基础是()。（2.0分）', '政治互信', '民族大义', '九二共识', '一个中国原则', 'CD', '九二共识;一个中国原则');
INSERT INTO `mooc_questions` VALUES ('1126799942027907074', '2015年,我国外交部长王毅表示,中国在当代国际秩序中扮演了哪些角色?()（2.0分）', '参与者', '维护者', '改革者', '征服者', 'ABC', '参与者;维护者;改革者');
INSERT INTO `mooc_questions` VALUES ('1126799942078238722', '根据德国《时代》周报的评价,截至2016年12月,支付宝和微信支付得到普遍使用。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799942132764674', '2019年年中,美联储的政策组合有较大可能从“快加息+慢缩表”切换为“慢加息+快缩表”。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799942191484929', '要加快推进教育现代化、写好教育奋进之笔,需要坚持党对教育事业的全面领导。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799942229233665', '中国共产党领导是中国特色社会主义最本质的特征。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799942283759617', '邓小平在中共十二大开幕词中指出:把马克思主义的普遍真理同我国的具体实际结合起来,走自己的道路,建设有中国特色的社会主义。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799942334091265', '我国存在的收入分配差距有地区收入分配差距、人群收入分配差距。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799942413783042', '目前我们经济的发展已经不存在战略机遇期。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126799942443143169', '改革开放40年来, 我国GDP增长9.5%,发展较慢。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1126799942480891906', '2018年台湾“九合一”选举,民进党大败。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1126799942518640642', '法国巴黎“黄背心”运动的起因是抗议移民进入法国境内。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1127028541200855041', '下面哪些精神属于五四运动精神?()（2.0分）', '自强精神', '学习精神', '忧患精神', '革新精神', 'ACD', '自强精神;忧患精神;革新精神');
INSERT INTO `mooc_questions` VALUES ('1127028541561565186', '建设生态文明,需要涉及到哪些方面的改革?()（2.0分）', '生产方式', '生活方式', '思维方式', '价值观念', 'ABCD', '生产方式;生活方式;思维方式;价值观念');
INSERT INTO `mooc_questions` VALUES ('1127028541645451266', '中国的外交可分为哪几个层面?()（2.0分）', '发达国家外交', '大国外交', '周边外交', '发展中国家外交', 'BCD', '大国外交;周边外交;发展中国家外交');
INSERT INTO `mooc_questions` VALUES ('1127028541708365825', '对两岸关系未来走势进行分析,国际社会认同一个中国原则,但美国不会放弃“台湾牌”。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1127028541783863297', '现任美联储主席为特朗普。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1127028541825806337', '做好教育工作的根本保证是培养优秀的教师队伍。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
INSERT INTO `mooc_questions` VALUES ('1127028541859360770', '共同致富要以人为本。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' √');
INSERT INTO `mooc_questions` VALUES ('1127050114809024513', '以下哪些是判断教师好坏的标准?()（2.0分）', '是否有理想信念', '是否有扎实学识', '是否有道德情操', '是否有仁爱之心', 'ABCD', '是否有理想信念;是否有扎实学识;是否有道德情操;是否有仁爱之心');
INSERT INTO `mooc_questions` VALUES ('1127050115199094786', '全面深化改革思想的原则有()（2.0分）', '主题明确', '信念坚定', '方法科学', '不动禁区', 'ABC', '主题明确;信念坚定;方法科学');
INSERT INTO `mooc_questions` VALUES ('1127050115421392897', '中共十四届三中全会通过的《中共中央关于完善社会主义市场经济体制若干问题的决定》,是新时期指导我国经济体制改革的纲领性文件。（1.0分）', NULL, NULL, NULL, NULL, NULL, ' ×');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
