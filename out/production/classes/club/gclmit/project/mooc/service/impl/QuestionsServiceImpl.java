package club.gclmit.project.mooc.service.impl;

import club.gclmit.project.mooc.pojo.Questions;
import club.gclmit.project.mooc.mapper.QuestionsMapper;
import club.gclmit.project.mooc.service.QuestionsService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author 孤城落寞
 * @since 2019-05-10
 */
@Service
public class QuestionsServiceImpl extends ServiceImpl<QuestionsMapper, Questions> implements QuestionsService {

}
