package com.huatec.datahome.utils;

import com.huatec.datahome.domain.KeyStrValIntDO;
import com.huatec.datahome.domain.KeyStrValLongDO;
import org.springframework.util.CollectionUtils;
import org.springframework.util.ObjectUtils;

import java.util.*;

public class DataChangeUtil {
	/**
	 * 把返回的list转换为前台显示的name
	 * 
	 * @param list
	 * @param key
	 * @return
	 */
	public static List<String> changeName(List<Map<String, Object>> list, String key) {
		List<String> newlist = new ArrayList<>();
		for (Map<String, Object> m : list) {
			if (ObjectUtils.isEmpty(m.get(key))) {
				continue;
			}
			newlist.add(String.valueOf(m.get(key)));
		}
	
		HashSet<String> set = new HashSet<String>(newlist);
		List<String> rlist = new ArrayList<String>(set);
		Collections.sort(rlist);
		return rlist;
	}

	/**
	 * 把返回的list转换为前台显示的value
	 * 
	 * @param list
	 * @param key
	 * @return
	 */
	public static Map<String, Object> changeValue(List<Map<String, Object>> list, String name, String key,
												  String value) {
		List<String> keyList = changeName(list, key);
		Map<String, Object> valMap = new HashMap<>(16);
		for (int i = 0; i < keyList.size(); i++) {
			List<String> values = new ArrayList<>();
			for (Map<String, Object> m : list) {
				if (m.get(key).equals(keyList.get(i))) {
					String mapvalue = String.valueOf(m.get(value));
					values.add(mapvalue);
				}
			}
			valMap.put(keyList.get(i), values);
		}
		return valMap;
	}

	/**
	 * 填充横坐标为0~24小时
	 * @param list
	 * @return
	 */
	public static List<KeyStrValLongDO> fill24Hour(List<KeyStrValLongDO> list){
		if (CollectionUtils.isEmpty(list)) {
			list = batchInsert(list, 0, 24);
			return list;
		}

		for (int i = 0, nameNum; list.size() < 24; i++) {
			// list最后一个元素已遍历完，填充第i到第最后一个元素
			if(i>=list.size()){
				list = batchInsert(list, i, 24);
				break;
			}
			nameNum = Integer.parseInt(list.get(i).getName());
			if(nameNum != i){
				// list第i到当前小时都无数据，填充i到当前元素
				list = batchInsert(list, i, nameNum);
			}
			// list第i条有数据，跳过
		}

		return list;
	}

	/**
	 * 批量填充小时数据
	 * @param list
	 * @param start
	 * @param end
	 * @return
	 */
	public static List<KeyStrValLongDO> batchInsert(List<KeyStrValLongDO> list, int start, int end){
		for(int i=start; i<end; i++){
			list.add(i, new KeyStrValLongDO(Long.toString(i), 0L));
		}
		return list;
	}
}
